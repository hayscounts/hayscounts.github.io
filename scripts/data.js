
        const CHART_COLORS = {
	        red: 'rgb(255, 99, 132)',
	        orange: 'rgb(255, 159, 64)',
	        yellow: 'rgb(255, 205, 86)',
	        green: 'rgb(75, 192, 192)',
	        blue: 'rgb(54, 162, 235)',
	        purple: 'rgb(153, 102, 255)',
	        grey: 'rgb(201, 203, 207)',
	        magenta: 'rgb(139, 0, 139)',
	        indigo: 'rgb(75, 0, 130)',
	        neongreen: 'rgb(124, 252, 0)',
	        pink: 'rgb(255, 182, 193)',
	        turquoise: 'rgb(72, 209, 204)',
	        slate: 'rgb(112, 128, 133)',
	        navy: 'rgb(0, 0, 128)',
        }
        const combined_labels = ['2020-09-07', '2020-09-14', '2020-09-21', '2020-09-28', '2020-10-05', '2020-10-12', '2020-10-19', '2020-10-26', '2020-11-02', '2020-11-09', '2020-11-16', '2020-11-20', '2020-11-30', '2020-12-07', '2020-12-14', '2020-12-21', '2020-12-28', '2021-01-04', '2021-01-11', '2021-01-18', '2021-01-25', '2021-02-01', '2021-02-08', '2021-02-15', '2021-02-22', '2021-03-01', '2021-03-08', '2021-03-15', '2021-03-22', '2021-03-29', '2021-04-05', '2021-04-12', '2021-04-19', '2021-04-26', '2021-05-03', '2021-05-10', '2021-05-17', '2021-05-24', '2021-05-31', '2021-06-07', '2021-08-23', '2021-08-30', '2021-09-03', '2021-09-10', '2021-09-17', '2021-09-24', '2021-10-01', '2021-10-08', '2021-10-15', '2021-10-22'];
const new_combined_data = {
            labels: combined_labels,
            datasets: [{
            label: 'Total (Staff+Student) New Cases',
            backgroundColor: 'rgb(2, 117, 216)',
            borderColor: 'rgb(2, 117, 216)',
            fill: true,
            data: [6.0, 1.0, 1.0, 2.0, 1.0, 6.0, 9.0, 7.0, 13.0, 26.0, 19.0, 12.0, 26.0, 44.0, 30.0, 0.0, 48.0, 24.0, 62.0, 134.0, 42.0, 51.0, 26.0, 0.0, 8.0, 14.0, 14.0, 6.0, 8.0, 15.0, 16.0, 21.0, 15.0, 16.0, 15.0, 6.0, 5.0, 3.0, 0.0, 0.0, 56.0, 134.0, 212.0, 185.0, 140.0, 84.0, 68.0, 79.0, 38.0, 53.0],
}]
}
const new_student_data = {
            labels: combined_labels,
            datasets: [{
            label: 'New Student Cases',
            backgroundColor: 'rgb(2, 117, 216)',
            borderColor: 'rgb(2, 117, 216)',
            fill: true,
            data: [2.0, 0.0, 1.0, 2.0, 1.0, 3.0, 6.0, 6.0, 8.0, 16.0, 12.0, 6.0, 17.0, 22.0, 17.0, 0.0, 14.0, 12.0, 32.0, 74.0, 32.0, 42.0, 21.0, 0.0, 5.0, 8.0, 9.0, 6.0, 5.0, 13.0, 12.0, 17.0, 14.0, 14.0, 14.0, 4.0, 5.0, 2.0, 0.0, 0.0, 23.0, 121.0, 184.0, 162.0, 123.0, 78.0, 58.0, 73.0, 33.0, 48.0],
}]
}
const new_staff_data = {
            labels: combined_labels,
            datasets: [{
            label: 'New Staff Cases',
            backgroundColor: 'rgb(2, 117, 216)',
            borderColor: 'rgb(2, 117, 216)',
            fill: true,
            data: [4.0, 1.0, 0.0, 0.0, 0.0, 3.0, 3.0, 1.0, 5.0, 10.0, 7.0, 6.0, 9.0, 22.0, 13.0, 0.0, 34.0, 12.0, 30.0, 60.0, 10.0, 9.0, 5.0, 0.0, 3.0, 6.0, 5.0, 0.0, 3.0, 2.0, 4.0, 4.0, 1.0, 2.0, 1.0, 2.0, 0.0, 1.0, 0.0, 0.0, 33.0, 13.0, 28.0, 23.0, 17.0, 6.0, 10.0, 6.0, 5.0, 5.0],
}]
}
const cumulative_data = {
            labels: combined_labels,
            datasets: [{
            label: 'Cumulative (Staff+Student) Cases',
            backgroundColor: 'rgb(2, 117, 216)',
            borderColor: 'rgb(2, 117, 216)',
            data: [6.0, 7.0, 8.0, 10.0, 11.0, 17.0, 26.0, 33.0, 46.0, 72.0, 91.0, 103.0, 129.0, 173.0, 203.0, 203.0, 251.0, 275.0, 337.0, 471.0, 513.0, 564.0, 590.0, 590.0, 598.0, 612.0, 626.0, 632.0, 640.0, 655.0, 671.0, 692.0, 707.0, 723.0, 738.0, 744.0, 749.0, 752.0, 752.0, 752.0, 808.0, 942.0, 1154.0, 1339.0, 1479.0, 1563.0, 1631.0, 1710.0, 1748.0, 1801.0],
}]
}
const cumulative_student_data = {
            labels: combined_labels,
            datasets: [{
            label: 'Cumulative Student Cases',
            backgroundColor: 'rgb(2, 117, 216)',
            borderColor: 'rgb(2, 117, 216)',
            data: [2.0, 2.0, 3.0, 5.0, 6.0, 9.0, 15.0, 21.0, 29.0, 45.0, 57.0, 63.0, 80.0, 102.0, 119.0, 119.0, 133.0, 145.0, 177.0, 251.0, 283.0, 325.0, 346.0, 346.0, 351.0, 359.0, 368.0, 374.0, 379.0, 392.0, 404.0, 421.0, 435.0, 449.0, 463.0, 467.0, 472.0, 474.0, 474.0, 474.0, 497.0, 618.0, 802.0, 964.0, 1087.0, 1165.0, 1223.0, 1296.0, 1329.0, 1377.0],
}]
}
const cumulative_staff_data = {
            labels: combined_labels,
            datasets: [{
            label: 'Cumulative Staff Cases',
            backgroundColor: 'rgb(2, 117, 216)',
            borderColor: 'rgb(2, 117, 216)',
            data: [4.0, 5.0, 5.0, 5.0, 5.0, 8.0, 11.0, 12.0, 17.0, 27.0, 34.0, 40.0, 49.0, 71.0, 84.0, 84.0, 118.0, 130.0, 160.0, 220.0, 230.0, 239.0, 244.0, 244.0, 247.0, 253.0, 258.0, 258.0, 261.0, 263.0, 267.0, 271.0, 272.0, 274.0, 275.0, 277.0, 277.0, 278.0, 278.0, 278.0, 311.0, 324.0, 352.0, 375.0, 392.0, 398.0, 408.0, 414.0, 419.0, 424.0],
}]
}
const daily_labels = ['2021-09-01', '2021-09-02', '2021-09-03', '2021-09-04', '2021-09-05', '2021-09-06', '2021-09-07', '2021-09-08', '2021-09-09', '2021-09-10', '2021-09-11', '2021-09-12', '2021-09-13', '2021-09-14', '2021-09-15', '2021-09-16', '2021-09-17', '2021-09-18', '2021-09-19', '2021-09-20', '2021-09-21', '2021-09-22', '2021-09-23', '2021-09-24', '2021-09-25', '2021-09-26', '2021-09-27', '2021-09-28', '2021-09-29', '2021-09-30', '2021-10-01', '2021-10-02', '2021-10-03', '2021-10-04', '2021-10-05', '2021-10-06', '2021-10-07', '2021-10-08', '2021-10-09', '2021-10-10', '2021-10-11', '2021-10-12', '2021-10-13', '2021-10-14', '2021-10-15', '2021-10-16', '2021-10-17', '2021-10-18', '2021-10-19', '2021-10-20', '2021-10-21', '2021-10-22'];
const new_daily_combined_data = {
            labels: daily_labels,
            datasets: [{
            label: 'Total (Staff+Student) Daily New Cases',
            backgroundColor: 'rgb(255, 139, 24)',
            borderColor: 'rgb(255, 139, 24)',
            fill: true,
            data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 78.0, 86.0, 27.0, 31.0, 0.0, 0.0, 56.0, 23.0, 26.0, 16.0, 19.0, 0.0, 0.0, 33.0, 18.0, 12.0, 16.0, 7.0, 0.0, 0.0, 25.0, 12.0, 15.0, 7.0, 10.0, 0.0, 0.0, 22.0, 17.0, 14.0, 16.0, 11.0, 0.0, 0.0, 0.0, 0.0, 24.0, 8.0, 6.0, 0.0, 0.0, 26.0, 7.0, 9.0, 7.0, 4.0],
}]
}
const new_daily_student_data = {
            labels: daily_labels,
            datasets: [{
            label: 'Daily New Student Cases',
            backgroundColor: 'rgb(255, 139, 24)',
            borderColor: 'rgb(255, 139, 24)',
            fill: true,
            data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 73.0, 78.0, 25.0, 25.0, 0.0, 0.0, 49.0, 21.0, 23.0, 15.0, 15.0, 0.0, 0.0, 32.0, 16.0, 11.0, 14.0, 7.0, 0.0, 0.0, 20.0, 12.0, 12.0, 6.0, 9.0, 0.0, 0.0, 20.0, 16.0, 13.0, 16.0, 9.0, 0.0, 0.0, 0.0, 0.0, 21.0, 6.0, 6.0, 0.0, 0.0, 23.0, 7.0, 9.0, 5.0, 4.0],
}]
}
const new_daily_staff_data = {
            labels: daily_labels,
            datasets: [{
            label: 'Daily New Staff Cases',
            backgroundColor: 'rgb(255, 139, 24)',
            borderColor: 'rgb(255, 139, 24)',
            fill: true,
            data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 5.0, 8.0, 2.0, 6.0, 0.0, 0.0, 7.0, 2.0, 3.0, 1.0, 4.0, 0.0, 0.0, 1.0, 2.0, 1.0, 2.0, 0.0, 0.0, 0.0, 5.0, 0.0, 3.0, 1.0, 1.0, 0.0, 0.0, 2.0, 1.0, 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 3.0, 2.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 2.0, 0.0],
}]
}
const es_pie_data = {
	        labels: ['BlancoVistaES', 'BudaES', 'CaminoRealES', 'CarpenterHillES', 'ElmGroveES', 'FuentesES', 'TomGreenES', 'HemphillES', 'KyleES', 'NegleyES', 'PflugerES', 'ScienceHallES', 'TobiasES', 'UhlandES'],
datasets: [
	          {
	            label: 'ES % cases',
	            backgroundColor: Object.values(CHART_COLORS),
	            data: [33.0, 60.0, 40.0, 65.0, 83.0, 71.0, 46.0, 36.0, 63.0, 100.0, 15.0, 36.0, 104.0, 29.0]}]}

const ms_pie_data = {
	        labels: ['BartonMS', 'ChapaMS', 'DahlstromMS', 'McCormickMS', 'SimonMS', 'WallaceMS'],
datasets: [
	          {
	            label: 'MS % cases',
	            backgroundColor: Object.values(CHART_COLORS),
	            data: [87.0, 67.0, 194.0, 41.0, 47.0, 65.0]}]}

const hs_pie_data = {
	        labels: ['HaysHS', 'JohnsonHS', 'LehmanHS', 'LiveOakAcademy'],
datasets: [
	          {
	            label: 'HS % cases',
	            backgroundColor: Object.values(CHART_COLORS),
	            data: [118.0, 171.0, 142.0, 10.0]}]}


