function showECG() {
  const content = document.getElementById('featureContent');
  content.innerHTML = `
    <h2>ECG Diagram</h2>
    <canvas id="ecgChart" width="600" height="300"></canvas>
  `;
  drawECG();
}

function showBPM() {
  const content = document.getElementById('featureContent');
  content.innerHTML = `
    <h2>Measure BPM</h2>
    <p>Your current BPM: <span id="bpmValue">${Math.floor(Math.random() * 40 + 60)}</span></p>
    <button onclick="simulateBPM()">Refresh BPM</button>
  `;
}

function drawECG() {
  const ctx = document.getElementById('ecgChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({length: 100}, (_, i) => i),
      datasets: [{
        label: 'ECG Signal',
        data: Array.from({length: 100}, (_, i) =>
          Math.sin(i * 0.2) + Math.random() * 0.5),
        borderColor: '#d50000',
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          suggestedMin: -2,
          suggestedMax: 2,
        }
      }
    }
  });
}

function simulateBPM() {
  const bpmValue = document.getElementById('bpmValue');
  bpmValue.textContent = Math.floor(Math.random() * 40 + 60);
}
