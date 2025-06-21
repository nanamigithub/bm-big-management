document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const data = JSON.parse(localStorage.getItem("foodRecords") || "[]");

  const events = [];
  data.forEach(({ food, calories, date, meal }) => {
    const title = `${meal}：${food}`;
    events.push({
      title,
      start: date
    });
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
