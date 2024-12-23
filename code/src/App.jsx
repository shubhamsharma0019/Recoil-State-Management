import { countAtom } from "./store/count";
import { RecoilRoot,useRecoilValue,useSetRecoilState } from "recoil";
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}
function Count(){
  return <div>
  <CountRenderer/>
  <Button/>
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
return <div>
  {count}
</div>
}


function Button(){
  // const [count,setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count=>count + 1);
    }}>
      Increase
    </button>

    <button onClick={()=>{
      setCount(count=>count - 1);
    }}>
      Decrease
    </button>
  </div>

}

export default App

