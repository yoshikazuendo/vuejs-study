const VueClipboard = window['VueClipboard'];
const Draggable = window['vuedraggable'];
Vue.use(VueClipboard);

const vm = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  components: {
    'draggable': Draggable,
  },
  data: {
    draggableOptions: {
      animation: 200,
    },
    snackbar: false,
    message: '',
    status: ['', '継続', '完了'],
    meetings: [],
    works: [],
    others: [],
  },
  computed: {
    teamsContents: function () {
      let sumMeeting = "";
      if (this.meetings.filter((meeting) => meeting.contents !== '').length > 0) {
        this.meetings.forEach(meeting => {
          if (meeting.contents !== '') {
            sumMeeting += `　・${meeting.contents}`;
            if (meeting.hours !== '') {
              sumMeeting += ` ${meeting.hours}h`;
            }
            sumMeeting += '\r\n';
          }
        });
      } else {
        sumMeeting = "　なし\r\n";
      }

      let sumWork = "";
      if (this.works.filter((work) => work.contents !== '').length > 0) {
        this.works.forEach(work => {
          if (work.contents !== '') {
            sumWork += `　・${work.contents}`;
            if (work.hours !== '') {
              sumWork += ` ${work.hours}h`;
            }
            if (work.status !== undefined && work.status !== '') {
              sumWork += ` ${work.status}`;
            }
            sumWork += '\r\n';
          }
        });
      } else {
        sumWork = "　なし\r\n";
      }

      let sumOther = "■その他\r\n";
      if (this.others.filter((other) => other.contents !== '').length > 0) {
        this.others.forEach(other => {
          if (other.contents !== '') {
            sumOther += `　・${other.contents}\r\n`;
          }
        });
      } else {
        sumOther = '';
      }

      return `■打合せ
${sumMeeting}■作業
${sumWork}
${sumOther}`;
    },
    excelContents: function () {
      let sumContents = "";
      this.meetings.forEach(meeting => {
        if (meeting.contents !== '') {
          sumContents += `${meeting.contents}、`;
        }
      });
      this.works.forEach(work => {
        if (work.contents !== '') {
          sumContents += `${work.contents}、`;
        }
      });
      return `${sumContents.slice(0, -1)}`;
    },
  },
  mounted: function () {
    this.loadReportFromStorage();
  },
  methods: {
    addMeeting: function () {
      this.meetings.push({
        id: uuidv4(),
        contents: '',
        hours: ''
      });
      this.saveReportFromStorage();
    },
    addWork: function () {
      this.works.push({
        id: uuidv4(),
        contents: '',
        hours: '',
        status: ''
      });
      this.saveReportFromStorage();
    },
    addOther: function () {
      this.others.push({
        id: uuidv4(),
        contents: '',
      });
      this.saveReportFromStorage();
    },
    loadReportFromStorage: function () {
      this.meetings = JSON.parse(localStorage.getItem('meetings'));
      if (!this.meetings) {
        this.meetings = [];
      }
      this.works = JSON.parse(localStorage.getItem('works'));
      if (!this.works) {
        this.works = [];
      }
      this.others = JSON.parse(localStorage.getItem('others'));
      if (!this.others) {
        this.others = [];
      }
    },
    saveReportFromStorage: function () {
      localStorage.clear();
      localStorage.setItem('meetings', JSON.stringify(this.meetings));
      localStorage.setItem('works', JSON.stringify(this.works));
      localStorage.setItem('others', JSON.stringify(this.others));
    },
    deleteMeeting: function (id) {
      this.meetings = this.meetings.filter((meeting) => meeting.id !== id);
      this.saveReportFromStorage();
    },
    deleteWork: function (id) {
      this.works = this.works.filter((work) => work.id !== id);
      this.saveReportFromStorage();
    },
    deleteOther: function (id) {
      this.others = this.others.filter((other) => other.id !== id);
      this.saveReportFromStorage();
    },
    onTeamsContentsCopy: function () {
      this.message = "Teams向けをクリップボードへコピーしました！"
      this.snackbar = true;
      this.saveReportFromStorage();
    },
    onTeamsContentsCopyError: function () {
      this.snackbar = true;
    },
    onExcelContentsCopy: function () {
      this.message = "Excel向けをクリップボードへコピーしました！"
      this.snackbar = true;
      this.saveReportFromStorage();
    },
    onExcelContentsCopyError: function () {
      this.snackbar = true;
    },
  }
});
