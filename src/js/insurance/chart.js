const canvas = document.getElementById('insuranceLineChart');
const ctx = canvas.getContext('2d');

// Sample data for the number of applications received each day
const days = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8'];
const applications = [2,3,5,1,3,2,4,6];

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

// Draw x-axis labels with rotation
ctx.fillStyle = '#000';
ctx.font = '20px Arial';

days.forEach((day, index) => {
    const x = padding + index * xStep;
    const y = canvas.height - padding + 20;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-Math.PI / 4);
    ctx.fillText(day, 0, 0);
    ctx.restore();
});