document.getElementById('statusProgress').addEventListener('click', function() {
    document.getElementById('progressH1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('statusAudit').addEventListener('click', function() {
    document.getElementById('auditH1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('statusFinished').addEventListener('click', function() {
    document.getElementById('finishedH1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('statusRejected').addEventListener('click', function() {
    document.getElementById('rejectH1').scrollIntoView({ behavior: 'smooth' });
});