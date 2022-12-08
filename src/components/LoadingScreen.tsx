import { LinearProgress } from "@mui/material"

const LoadingScreen = () => {
  return (
    <div className="fixed w-screen h-screen flex flex-col gap-10 items-center justify-center z-100 bg-secondary inset-0">
      <p className="text-4xl font-bold text-center text-sub">Live-Tac-Toe</p>
      <LinearProgress className="self-stretch" sx={{
        backgroundColor: "#EB644066",
        ".css-5ir5xx-MuiLinearProgress-bar1": {
          backgroundColor: "#EB6440"
        },
        ".css-1r8wrcl-MuiLinearProgress-bar2": {
          backgroundColor: "#EB6440"
        }
      }}/>
    </div>
  )
}

export default LoadingScreen