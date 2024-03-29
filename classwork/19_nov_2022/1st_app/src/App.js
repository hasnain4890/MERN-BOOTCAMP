// import Welcomeuser from "./26-11-2022";
//import ReactForm from "./3_12_2022/bootstrap_form/ReactForm";
//import Main from "./4_dec_2022/task1/Main";
import LoginPage from "./11-12-2022/login/LoginPage";
import AppRoute from "./11-12-2022/route/AppRoute";
import "./App.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    // <div className="App">
    //   {/* <h1> hasnain ahmad react</h1> */}
    //   <AppRoute />
    //   {/* <Welcomeuser></Welcomeuser> */}
    //   {/* <ReactForm /> */}
    //   {/* <Main /> */}
    // </div>
    <QueryClientProvider client={queryClient}>
      <AppRoute />
    </QueryClientProvider>
  );
}

export default App;
