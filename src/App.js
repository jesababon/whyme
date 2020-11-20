import logo from './logo.svg';
import './CMS.css';
// import Button from '@cmsgov/design-system/dist/components/Button/Button';



function App() {
  return (
    <div className="App">
      <header className="App-header ds-u-fill--primary">
        <img src={logo} className="App-logo " alt="logo" />
        </header>
        <p className="ds-display">
          <button type="button" className="ds-c-button ds-c-button--primary ds-c-button--hover ds-c-button--big">
            Stuff
          </button>
        </p>
        <p>
          <button className="ds-c-button ds-c-button--danger">
          Right icon<svg className="ds-u-margin-left--0" aria-hidden="true" viewBox="0 0 24 24">
          </svg>
          {/* <use xlink:href=''></use> */}
        </button>
        </p>
        <p className="ds-title">
          Now we're rocking.
        </p>
        <ul className="ds-c-list ds-u-font-size--h3 " >
          <li><strong>Legislative</strong> – Makes laws (Congress)</li>
          <li><strong>Executive</strong> – Carries out laws (President, Vice President, Cabinet)</li>
          <li><strong>Judicial</strong> – Evaluates laws (Supreme Court and other courts)</li>
        </ul>
        <a
          className="ds-c-link--inverse"
          href="https://www.linkedin.com/in/jesababon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with Jes
        </a>
    </div>
  );
}

export default App;
