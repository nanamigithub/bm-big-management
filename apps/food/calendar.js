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
  events: events,

  dateClick: function(info) {
    const clickedDate = info.dateStr;
    const meal = prompt(`为 ${clickedDate} 添加饮食记录（格式：早餐:苹果）`);
    if (meal) {
      const [mealTime, food] = meal.split(':');
      const newEvent = {
        title: `${mealTime}：${food}`,
        start: clickedDate
      };
      calendar.addEvent(newEvent);

      const saved = JSON.parse(localStorage.getItem("foodRecords") || "[]");
      saved.push({
        food: food,
        calories: "",
        date: clickedDate,
        meal: mealTime
      });
      localStorage.setItem("foodRecords", JSON.stringify(saved));
    }
  },

  eventClick: function(info) {
    const oldTitle = info.event.title;
    const newTitle = prompt("编辑记录（格式如 午餐:香蕉）", oldTitle);
    if (newTitle === null) return;

    if (newTitle === "") {
      if (confirm("是否删除这条记录？")) {
        info.event.remove();
        const saved = JSON.parse(localStorage.getItem("foodRecords") || "[]");
        const updated = saved.filter(record =>
          !(record.date === info.event.startStr && `${record.meal}：${record.food}` === oldTitle)
        );
        localStorage.setItem("foodRecords", JSON.stringify(updated));
      }
    } else {
      info.event.setProp("title", newTitle);
      const saved = JSON.parse(localStorage.getItem("foodRecords") || "[]");
      const updated = saved.filter(record =>
        !(record.date === info.event.startStr && `${record.meal}：${record.food}` === oldTitle)
      );
      const [mealTime, food] = newTitle.split(":");
      updated.push({
        food,
        calories: "",
        date: info.event.startStr,
        meal: mealTime
      });
      localStorage.setItem("foodRecords", JSON.stringify(updated));
    }
  }

});

  calendar.render();
});
