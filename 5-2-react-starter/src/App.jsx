// import './App.css'
// import StudentCard from './components/StudentCard';
//
// function App() {
//   return (
//     <div className="app">
//       <header className="dashboard-header">
//         <h1>Student Information Dashboard</h1>
//         <p>View and manage student details</p>
//       </header>
//
//       <main className="dashboard-main">
//         <div className="cards-container">
//           {<div className="cards-container"> </div>}
//         </div>
//       </main>
//     </div>
//   )
// }
//
// export default App
import './App.css';
import StudentCard from './components/StudentCard';

function App() {
    return (
        <div className="app">
            <header className="dashboard-header">
                <h1>Student Information Dashboard</h1>
                <p>View and manage student details</p>
            </header>

            <main className="dashboard-main">
                <div className="cards-container">
                    <StudentCard
                        name="Aleen Alqarni"
                        id="202257160"
                        dept="Information and Computer Science"
                    />
                    <StudentCard
                        name="Sara Khan"
                        id="20219876"
                        dept="Software Engineering"
                    />
                </div>
            </main>
        </div>
    );
}

export default App;
