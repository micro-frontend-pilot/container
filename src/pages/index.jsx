import React, { Suspense } from 'react';
import axios from 'axios';

import BoardAddition from './BoardAddition';
// import BoardList from './BoardList';
import Home from './Home';
import Monitor from './Monitor';
import ThemeSelection from './ThemeSettings';
// import UserList from './UserList';
// import UserList from 'nextjscomponents/UserList';
// import BoardList from 'nextjscomponents/BoardList';
import UserAddition from './UserAddition';
import NotFound from './NotFound';
import dynamic from "next/dynamic";

const UserList = React.lazy(()=> import("nextjscomponents/UserList"));
// const BoardList= React.lazy(()=> import("nextjscomponents/BoardList"));
// const BoardList = dynamic(import("nextjscomponents/BoardList"), { ssr: true });
// import BoardList from 'nextjscomponents/BoardList';
const MfeAngularjsComponent = React.lazy(()=>import("ng_mfe_expose/MfeAngularComponent"));

var inited = false;

const BoardList = (props) => {
    // window.location.replace('http://localhost:3007/user-list');
    // return null;
    // const [innerHtml, setInnerHtml] = React.useState("");

    React.useEffect(()=>{
    //     axios.get("http://localhost/board-list", {
    //         // headers: { "Access-Control-Allow-Origin" : "*" }
    //     }).then(response=>{
    //         // var html="<html><head><style data-next-hide-fouc='true'>body{display:none}</style><noscript data-next-hide-fouc='true'><style>body{display:block}</style></noscript><meta charSet='utf-8'/><meta name='viewport' content='width=device-width'/><link rel='icon' href='/favicon.ico'/><meta name='description' content='Learn how to build a personal website using Next.js'/><meta property='og:image' content='https://og-image.vercel.app/Next.js%20Sample%20Website.png?theme=light&amp;md=0&amp;fontSize=75px&amp;images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'/><meta name='og:title' content='Next.js Sample Website'/><meta name='twitter:card' content='summary_large_image'/><link rel='preload' as='image' imageSrcSet='/_next/image?url=%2Fimages%2Fprofile.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprofile.jpg&amp;w=256&amp;q=75 2x' fetchpriority='high'/><title>User List</title><meta name='next-head-count' content='9'/><noscript data-n-css=''></noscript><script defer='' nomodule='' src='/_next/static/chunks/polyfills.js?ts=1689918746663'></script><script src='/_next/static/chunks/webpack.js?ts=1689918746663' defer=''></script><script src='/_next/static/chunks/main.js?ts=1689918746663' defer=''></script><script src='/_next/static/chunks/pages/_app.js?ts=1689918746663' defer=''></script><script src='/_next/static/chunks/pages/user-list.js?ts=1689918746663' defer=''></script><script src='/_next/static/development/_buildManifest.js?ts=1689918746663' defer=''></script><script src='/_next/static/development/_ssgManifest.js?ts=1689918746663' defer=''></script><noscript id='__next_css__DO_NOT_USE__'></noscript></head><body><div id='__next'><div class='layout_container__fbLkO'><header><a href='/''><img alt='' fetchpriority='high' width='108' height='108' decoding='async' data-nimg='1' class='utils_borderCircle__s2nTm' style='color:transparent' srcSet='/_next/image?url=%2Fimages%2Fprofile.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprofile.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fprofile.jpg&amp;w=256&amp;q=75'/></a><h2 class='utils_headingLg__5535D'><a class='utils_colorInherit__mSH_x' href='/'>Insoo Park</a></h2></header><main><h1>User List Page</h1></main><div class='layout_backToHome__9sjx_'><a href='/'>← Back to home</a></div></div></div><script src='/_next/static/chunks/react-refresh.js?ts=1689918746663'></script><script id='__NEXT_DATA__' type='application/json'>{'props':{'pageProps':{}},'page':'/user-list','query':{},'buildId':'development','nextExport':true,'autoExport':true,'isFallback':false,'scriptLoader':[]}</script></body></html>";
    //         setInnerHtml(response.data.replace("none", "block"));
    //         var div=document.getElementById("aaa")
    //         console.log(">>>>>>>"+div);
    //         div.innerHTML=response.data.replace("none", "block");
    //         // div.innerHTML=html.replace("none", "block");
    //     }).catch(err=>{
    //         console.log("ERROR=>"+err);
    //     });
       window.addEventListener('message', (e)=>{
        console.log("data from board-list of message event");
       });
    //    document.querySelector("iframe").addEventListener( "load", function() {
    //     console.log("iframe content loaded");
    //    });
    //    window.onload = () => {
    //     document.getElementById("board-list").onload = () => {
    //         console.log("iframe content loaded");
    //     }
    //    }
    }, []);

    const onLoad = (e) => {
        console.log("board-list iframe loaded=>" + e);
    }

    return (
        // <div {...props } id="aaa"/>
        <div>
            <iframe 
                id="board-list" {...props } 
                width="100%" 
                height="500" 
                src="http://localhost:3002/board-list"
                onLoad={(e)=>onLoad(e)}
            >
            </iframe>
        </div>

    )
}

const SuspendMfeAngularjsComponent = (props)=>{
    return (
        <Suspense fallback={ <p>Loading...</p> }>
            <MfeAngularjsComponent fooBar={ 12 } baz='baz'/>
        </Suspense>
    )
}

const SuspenseUserList = (props) => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <UserList {...props}/>
        </Suspense>
    )
}

const SuspenseBoardList = (props) => {

    const [data, setData] = React.useState({});
    // React.useEffect(()=>{
    //     BoardList.getInitialProps().then((result)=>{
    //         console.log(JSON.stringify(result));
    //         setData(result.data);
    //     });
    // },[]);
    
    // getServerSideProps(undefined).then((result)=>{
    //     console.log(JSON.stringify(result));
    //     data=result.data;
    //     console.log("FETCHED DATA FROM SERVER=>"+JSON.stringify(data));
    // });
    
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <BoardList data={data} {...props}/>
        </Suspense>
    )
}

const configureRoutes = (props) => {
    // if(inited == true) return;
    // inited = true;

    var routeList = [];
    var home = {
        "key": "/",
        "presenter": <Home { ...props } />,
        "breadcrumb": "홈",
        "layout": "layout-1"
    };

    var mfeAngularjs = {
        "key": "/mfr-angularjs",
        "presenter": <SuspenseMfeAngularComponent { ...props } />,
        "breadcrumb": "mfe3",
        "layout": "layout-1"
    };

    var userList = {
        "key": "/user/list",
        "presenter": <SuspenseUserList { ...props } />,
        "breadcrumb": "기술인목록",
        "layout": "layout-1"
    };

    var userAddition = {
        "key": "/user/addition",
        "presenter": <UserAddition { ...props } />,
        "breadcrumb": "기술인추가",
        "layout": "layout-1"
    }

    var boardList = {
        "key": "/board/list",
        "presenter": <SuspenseBoardList { ...props } />,
        // "presenter": {()=>{ }},
        "breadcrumb": "게시글목록",
        "layout": "layout-1"
    }

    var boardAddition = {
        "key": "/board/addition",
        "presenter": <BoardAddition { ...props } />,
        "breadcrumb": "게시글추가",
        "layout": "layout-1"
    }

    var themeSetting = {
        "key": "themeSelection",
        "presenter": <ThemeSelection { ...props } />,
        "breadcrumb": "테마선택",
        "layout": "layout-1"
    };

    var monitoring = {
        "key": "monitoring",
        "presenter": <Monitor { ...props } />,
        "breadcrumb": "모니터링",
        "layout": "layout-1"
    };

    var notfound = {
        "key": "*",
        "presenter": <NotFound { ...props } />,
        "breadcrumb": "NotFound",
        "layout": "layout-1"
    };

    const size = {
        "width": "1000",
        "height": "600"
    };

    routeList.push(home);
    routeList.push(mfeAngularjs);
    routeList.push(userList);
    routeList.push(userAddition);
    routeList.push(boardList);
    routeList.push(boardAddition);
    routeList.push(themeSetting);
    routeList.push(monitoring);
    routeList.push(notfound);

    return routeList;
}

export {
    configureRoutes,
    Home
}
