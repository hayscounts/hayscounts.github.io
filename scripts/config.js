const new_daily_combined_config = {
 type: 'bar',
 data: new_daily_combined_data,
 options: {}
};

const new_daily_student_config = {
 type: 'bar',
 data: new_daily_student_data,
 options: {}
};

const new_daily_staff_config = {
 type: 'bar',
 data: new_daily_staff_data,
 options: {}
};

const new_combined_config = {
 type: 'bar',
 data: new_combined_data,
 options: {}
};

const new_student_config = {
 type: 'bar',
 data: new_student_data,
 options: {}
};

const new_staff_config = {
 type: 'bar',
 data: new_staff_data,
 options: {}
};

const cumulative_config = {
 type: 'line',
 data: cumulative_data,
 options: {}
};

const cumulative_student_config = {
 type: 'line',
 data: cumulative_student_data,
 options: {}
};

const cumulative_staff_config = {
 type: 'line',
 data: cumulative_staff_data,
 options: {}
};

const es_pie_config = {
  type: 'pie',
  data: es_pie_data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Cases by Elementary School Campus'
      }
    }
  }
};

const ms_pie_config = {
  type: 'pie',
  data: ms_pie_data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Cases by Middle School Campus'
      }
    }
  }
};

const hs_pie_config = {
  type: 'pie',
  data: hs_pie_data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Cases by High School Campus'
      }
    }
  }
};

module.exports = {
 actions: [],
};