import compayZImage from '/compayz-logo.jpg';
import lisbomImage from '/lisbom-logo.jpg';
import unoparImage from '/unopar-logo.jpg';
import ifImage from '/if-logo.jpg';
import { HelloSection } from './components/home/hello-section';

function App() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mx-5 min-h-screen max-w-4xl lg:mx-auto">
        <div
          className="mt-10 py-12 md:py-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23E6E6E6FF' stroke-width='2' stroke-dasharray='3%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
          }}
        >
          <HelloSection />
        </div>
      </div>
    </div>
  );
}

export default App;
