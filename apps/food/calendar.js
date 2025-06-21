document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const data = JSON.parse(localStorage.getItem("foodRecords") || "[]");

  const events = [];
  data.forEach(record => {
  if (record.food && record.date && record.meal) {
    const title = `${record.meal}：${record.food}`;
    events.push({ title, start: record.date });
  }
});

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    events: events
  });

  calendar.render();
});
