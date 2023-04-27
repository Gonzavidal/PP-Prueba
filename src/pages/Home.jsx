import Logo from '../assets/logo.jpeg';



export default function Home() {
  return (
    <div className="container-fluid text-center">
      <h1>Bienvenido a Pedal Partner</h1>
      <hr/>
      <div className="row">
        <div className="col">
          <img src={Logo} alt="MVDP" />
        </div>
      </div>
    </div>
  );
};