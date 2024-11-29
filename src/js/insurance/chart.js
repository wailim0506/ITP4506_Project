const canvas = document.getElementById('insuranceLineChart');
const ctx = canvas.getContext('2d');

// Sample data for the number of applications received each day
const days = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
const applications = [10, 15, 17, 20, 19, 18, 12, 22, 10, 15, 17, 20];

const maxApplications = Math.max(...applications);
const padding = 40;
const xStep = (canvas.width - padding * 2) / (days.length - 1);
const yStep = (canvas.height - padding * 2) / maxApplications;

// Draw the line chart
ctx.beginPath();
ctx.moveTo(padding, canvas.height - padding - applications[0] * yStep);
applications.forEach((appCount, index) => {
    const x = padding + index * xStep;
    const y = canvas.height - padding - appCount * yStep;
    ctx.lineTo(x, y);
});
ctx.strokeStyle = '#2bb6e3';
ctx.lineWidth = 2;
ctx.stroke();

// Draw points on the line
applications.forEach((appCount, index) => {
    const x = padding + index * xStep;
    const y = canvas.height - padding - appCount * yStep;
    ctx.fillStyle = '#4c74af';
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.fillText(appCount, x - 10, y - 10);
});

// Draw x-axis
ctx.beginPath();
ctx.moveTo(padding, canvas.height - padding);
ctx.lineTo(canvas.width - padding, canvas.height - padding);
ctx.stroke();

// Draw x-axis labels
ctx.fillStyle = '#000';
days.forEach((day, index) => {
    const x = padding + index * xStep;
    ctx.fillText(day, x, canvas.height - padding + 20);
});