$(function () {
	$("#tabs").tabs({
		collapsible: true,
	});
});

window.onload = function () {
	let primerGrafico = {
		animationEnabled: true,
		title: {
			text: "Nivel de dominio de lenguajes de programación/software",
			fontColor: "#131111",
		},

		data: [
			{
				type: "pyramid",
				indexLabelFontSize: 15,
				showInLegend: true,
				legendText: "{indexLabel}",
				toolTipContent: "<b>{indexLabel}:</b> {y}%",
				dataPoints: [
					{ y: 40, label: " ", indexLabel: "Git & GitHub" },
					{ y: 40, label: " ", indexLabel: "SQL/Postgres" },
					{ y: 45, label: " ", indexLabel: "Java Script" },
					{ y: 60, label: " ", indexLabel: "HTML" },
					{ y: 60, label: " ", indexLabel: "CSS" },
				],
			},
		],
	};

	$("#graficoUno").CanvasJSChart(primerGrafico);

	let segundoGrafico = {
		animationEnabled: true,
		title: {
			text: "Librerías y Frameworks",
			fontColor: "#131111",
		},
		axisY: {
			tickThickness: 0,
			lineThickness: 0,
			valueFormatString: " ",
			includeZero: true,
			gridThickness: 0,
		},
		data: [
			{
				type: "bar",
				indexLabelFontSize: 15,
				indexLabelFontSize: 15,
				legendText: "{indexLabel}",
				toolTipContent: "<b>{indexLabel}:</b> {y}%",
				dataPoints: [
					{ y: 35, label: " ", indexLabel: "ExpressJS" },
					{ y: 40, label: " ", indexLabel: "NodeJS" },
					{ y: 40, label: " ", indexLabel: "HandlebarsJS" },
					{ y: 40, label: " ", indexLabel: "jQuery UI" },
					{ y: 50, label: " ", indexLabel: "jQuery" },
					{ y: 50, label: " ", indexLabel: "CanvasJS" },
					{ y: 70, label: " ", indexLabel: "Bootstrap" },
				],
			},
		],
	};

	$("#graficoDos").CanvasJSChart(segundoGrafico);
};
