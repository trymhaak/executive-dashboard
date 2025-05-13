// Executive Security Dashboard - Streamlined JavaScript

// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Set up tab navigation
    setupTabNavigation();
    
    // Initialize charts with dummy data
    initializeCharts();
    
    // Set up print functionality
    setupPrintButton();
});

// Function to set up tab navigation
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Function to initialize charts with dummy data
function initializeCharts() {
    // 1. Security Incidents by Severity Chart
    createSeverityChart();
    
    // 2. Incident Status Chart
    createStatusChart();
    
    // 3. Weekly Alert Volume Chart
    createWeeklyAlertVolumeChart();
    
    // 4. Incident Handling Efficiency Chart
    createEfficiencyChart();
    
    // 5. Top Alert Sources Chart
    createAlertSourcesChart();
    
    // 6. Top Targeted Systems Chart
    createTargetedSystemsChart();
    
    // 7. MITRE ATT&CK Coverage Chart
    createMitreCoverageChart();
}

// Function to create Severity Chart
function createSeverityChart() {
    const ctx = document.getElementById('severityChart').getContext('2d');
    
    const data = {
        labels: ['Critical', 'High', 'Medium', 'Low', 'Informational'],
        datasets: [{
            label: 'Incidents by Severity',
            data: [3, 7, 15, 12, 5],
            backgroundColor: [
                '#dc3545', // Critical - Red
                '#fd7e14', // High - Orange
                '#ffc107', // Medium - Yellow
                '#20c997', // Low - Teal
                '#6c757d'  // Informational - Gray
            ],
            borderWidth: 1
        }]
    };
    
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Incidents'
                    }
                }
            }
        }
    });
}

// Function to create Status Chart
function createStatusChart() {
    const ctx = document.getElementById('statusChart').getContext('2d');
    
    const data = {
        labels: ['Active', 'Closed', 'In Progress', 'New'],
        datasets: [{
            data: [12, 25, 8, 5],
            backgroundColor: [
                '#0066cc', // Active - Blue
                '#28a745', // Closed - Green
                '#ffc107', // In Progress - Yellow
                '#6c757d'  // New - Gray
            ],
            borderWidth: 1
        }]
    };
    
    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// Function to create Weekly Alert Volume Chart
function createWeeklyAlertVolumeChart() {
    const ctx = document.getElementById('alertVolumeChart').getContext('2d');
    
    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'];
    
    const data = {
        labels: labels,
        datasets: [{
            label: 'Alert Volume',
            data: [65, 59, 80, 81, 56, 55, 40, 45],
            fill: false,
            borderColor: '#0066cc',
            tension: 0.1
        }]
    };
    
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Alerts'
                    }
                }
            }
        }
    });
}

// Function to create Incident Handling Efficiency Chart
function createEfficiencyChart() {
    const ctx = document.getElementById('efficiencyChart').getContext('2d');
    
    const data = {
        labels: ['Average', 'Median', 'Target'],
        datasets: [
            {
                label: 'Response Time (hours)',
                data: [2.5, 1.8, 1.0],
                backgroundColor: '#0066cc',
                borderWidth: 1
            },
            {
                label: 'Resolution Time (hours)',
                data: [12.4, 8.6, 6.0],
                backgroundColor: '#fd7e14',
                borderWidth: 1
            }
        ]
    };
    
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Hours'
                    }
                }
            }
        }
    });
}

// Function to create Alert Sources Chart
function createAlertSourcesChart() {
    const ctx = document.getElementById('alertSourcesChart').getContext('2d');
    
    const data = {
        labels: ['Azure Security Center', 'Microsoft Defender ATP', 'Azure AD Identity Protection', 'Office 365 ATP', 'Azure Firewall'],
        datasets: [{
            label: 'Alert Count',
            data: [42, 38, 27, 22, 18],
            backgroundColor: '#0066cc',
            borderWidth: 1
        }]
    };
    
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Alerts'
                    }
                }
            }
        }
    });
}

// Function to create Targeted Systems Chart
function createTargetedSystemsChart() {
    const ctx = document.getElementById('targetedSystemsChart').getContext('2d');
    
    const data = {
        labels: ['Email Server', 'Web Application', 'Domain Controller', 'File Server', 'Database Server'],
        datasets: [{
            label: 'Alert Count',
            data: [35, 28, 22, 18, 15],
            backgroundColor: '#20c997',
            borderWidth: 1
        }]
    };
    
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Alerts'
                    }
                }
            }
        }
    });
}

// Function to create MITRE ATT&CK Coverage Chart
function createMitreCoverageChart() {
    const ctx = document.getElementById('mitreCoverageChart').getContext('2d');
    
    const data = {
        labels: [
            'Initial Access',
            'Execution',
            'Persistence',
            'Privilege Escalation',
            'Defense Evasion',
            'Credential Access',
            'Discovery',
            'Lateral Movement',
            'Collection',
            'Command & Control'
        ],
        datasets: [{
            label: 'Detection Coverage',
            data: [85, 70, 65, 60, 55, 45, 80, 40, 50, 75],
            fill: true,
            backgroundColor: 'rgba(0, 102, 204, 0.2)',
            borderColor: '#0066cc',
            pointBackgroundColor: '#0066cc',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#0066cc'
        }]
    };
    
    new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}

// Function to set up print button
function setupPrintButton() {
    const printButton = document.getElementById('printButton');
    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }
}
