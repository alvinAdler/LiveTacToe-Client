import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'
const Landing = lazy(() => import("./pages/Landing"))
const Game = lazy(() => import("./pages/Game"))

function App() {
	return (
		<div className="font-nunito w-screen h-screen bg-primary relative isolate">
			<Routes>
				<Route element={<Suspense fallback={<LoadingScreen/>}><Layout/></Suspense>}>
					<Route index element={<Landing/>}/>
					<Route path="/game" element={<Game/>}/>
				</Route>
			</Routes>
		</div>
	)
}

export default App
