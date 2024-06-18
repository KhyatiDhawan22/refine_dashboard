import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";


import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { createClient } from "graphql-ws";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { authProvider, dataProvider,liveProvider } from "./providers";




import {Home,ForgotPassword,Login,Register} from "./pages";

import Layout from "./components/layout";
import { resources } from "./config/resources";
import CompanyList from "./pages/company/list";
import Create from "./pages/company/create";
import EditPage from "./pages/company/edit";
import List from "./pages/tasks/list";
import CreateTask from "./pages/tasks/create";
// import EditTask from "./pages/tasks/edit";





function App() {
  return (
    <BrowserRouter>
      
      <RefineKbarProvider>
        
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={resources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "814Z4z-DMJ0yd-rWB7X4",
                  liveMode: "auto",
                }}
              >
                <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password"element={<ForgotPassword />}/>
                
                  <Route
                    element={<Authenticated
                        key="authenticated-layout"
                        fallback={<CatchAllNavigate to="/login" />}
                    >
                      <Layout>
                        <Outlet/>
                      </Layout>
                    </Authenticated>
                    }>
                  <Route index element={<Home />} />
                  <Route path="/companies">
                    <Route index element={<CompanyList />} />
                    <Route path=":id/new" element={<Create />}/> 
                    <Route path="edit/:id" element={<EditPage/>}/> 
                  </Route>
                  <Route path="/tasks"element={
                    <List>
                      <Outlet/>
                    </List>
                  }>
                      <Route path="new" element={<CreateTask/>}/>
                      {/* <Route path="edit/:id" element={<EditTask/>}/> */}

                  </Route>
                </Route>
                
                <Route path="*" element={<ErrorComponent />} />
                  
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
