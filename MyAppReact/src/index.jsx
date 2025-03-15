const react = ReactDOM.createRoot(document.getElementById("app"));

const Bun1 = () => {
	react.render(page2);
}

const Bun2 = () => {
	react.render(page1);
}

const bun1 = React.createElement('button', {
	id: 'bun',
	onClick: () => Bun1()
}, "Вперед");

const bun2 = React.createElement('button', {
	id: 'bun',
	onClick: () => Bun2()
}, "Назад");

const page2 = (
  <div id="page">
  	<br/>
    <h1>Hello world</h1>
    <center>{bun2}</center>
  </div>
)

// Разметка с JSX
const page1 = (
  <div id="page">
    <h1>Hello world</h1>
    <h2>Hello</h2>
    <br/>
    <center>{bun1}</center>
  </div>
);

// Рендерим комбинированный контейнер
react.render(page1);