(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2475:function(e,t,i){Promise.resolve().then(i.bind(i,79480))},79480:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return eg}});var r=i(57437),n=i(21183),l=i(52558),s=i(62587),a=i(40006),c=i(29928),o=i(39292),d=i(60373),x=i(98314),h=i(98559),p=i(52762),j=i(73953),u=i(35331),g=i(98915),m=i(33145),f=i(2768),v=i(2265),b=i(85322),y=i(81284),S=i(11535),k=i(22223);let w=e=>{let{children:t,innerWidth:i="container.lg",className:n,...s}=e,a=(0,S.useStyleConfig)("Section",s),c=(0,k.L)(s);return(0,r.jsx)(y.chakra.div,{__css:a,...c,children:(0,r.jsx)(l.Container,{height:"full",maxW:i,children:t})})},z=e=>{let{title:t,description:i,align:l,variant:s,...a}=e,c=(0,S.useMultiStyleConfig)("SectionTitle",{variant:s});return(0,r.jsxs)(o.VStack,{sx:c.wrapper,alignItems:"left"===l?"flex-start":"center",spacing:4,...a,children:[(0,r.jsx)(u.Heading,{sx:c.title,as:"h2",children:t}),i&&(0,r.jsx)(n.Box,{sx:c.description,textAlign:l,children:i})]})},C=e=>{let{title:t="Frequently asked questions",description:i,items:n=[]}=e;return(0,r.jsxs)(w,{id:"faq",children:[(0,r.jsx)(z,{title:t,description:i}),(0,r.jsx)(b.SimpleGrid,{columns:[1,null,2],spacingY:10,spacingX:"20",children:null==n?void 0:n.map((e,t)=>{let{q:i,a:n}=e;return(0,r.jsx)(I,{question:i,answer:n},t)})})]})},I=e=>{let{question:t,answer:i}=e;return(0,r.jsxs)(y.chakra.dl,{children:[(0,r.jsx)(y.chakra.dt,{fontWeight:"semibold",mb:"2",children:t}),(0,r.jsx)(y.chakra.dd,{color:"muted",children:i})]})};var B=i(99193),M=i(25112);let H=e=>{let{children:t}=e;return t},L=e=>{let{title:t,description:i,icon:l,iconPosition:a,iconSize:c=8,ip:o,variant:x}=e,h=(0,S.useMultiStyleConfig)("Feature",{variant:x});return(0,r.jsxs)(s.Stack,{sx:h.container,direction:"left"===(a||o)?"row":"column",children:[l&&(0,r.jsx)(B.Circle,{sx:h.icon,children:(0,r.jsx)(M.Icon,{as:l,boxSize:c})}),(0,r.jsxs)(n.Box,{children:[(0,r.jsx)(u.Heading,{sx:h.title,children:t}),(0,r.jsx)(d.Text,{sx:h.description,children:i})]})]})},T=e=>{let{title:t,description:i,features:l,columns:a=[1,2,3],spacing:c=8,align:d="center",iconSize:x=8,aside:h,reveal:p=H,...j}=e,u=h?"left":d,g="left"===u?"left":"top";return(0,r.jsx)(w,{...j,children:(0,r.jsxs)(s.Stack,{direction:"row",height:"full",align:"flex-start",children:[(0,r.jsxs)(o.VStack,{flex:"1",spacing:[4,null,8],alignItems:"stretch",children:[(t||i)&&(0,r.jsx)(p,{children:(0,r.jsx)(z,{title:t,description:i,align:u})}),(0,r.jsx)(b.SimpleGrid,{columns:a,spacing:c,children:l.map((e,t)=>(0,r.jsx)(p,{delay:e.delay,children:(0,r.jsx)(L,{iconSize:x,...e,ip:g})},t))})]}),h&&(0,r.jsx)(n.Box,{flex:"1",p:"8",children:h})]})})};var V=i(78183),F=i(7161);let _=e=>{let{hideOverlay:t,...i}=e,l=(0,V.useTheme)(),s=[l.colors.primary["800"],l.colors.secondary["500"],l.colors.cyan["500"],l.colors.teal["500"]],a="radial-gradient(at top left, ".concat(s[0]," 30%, transparent 80%), radial-gradient(at bottom, ").concat(s[1]," 0%, transparent 60%), radial-gradient(at bottom left, var(--chakra-colors-cyan-500) 0%, transparent 50%),\n        radial-gradient(at top right, ").concat(s[3],", transparent), radial-gradient(at bottom right, ").concat(s[0]," 0%, transparent 50%);"),c="linear-gradient(0deg, var(--chakra-colors-".concat((0,F.useColorModeValue)("white","gray-900"),") 60%, rgba(0, 0, 0, 0) 100%);");return(0,r.jsx)(n.Box,{backgroundImage:a,backgroundBlendMode:"saturation",position:"absolute",top:"0",left:"0",zIndex:"0",opacity:(0,F.useColorModeValue)("0.3","0.5"),height:"100vh",width:"100%",overflow:"hidden",pointerEvents:"none",...i,children:(0,r.jsx)(n.Box,{backgroundImage:t?void 0:c,position:"absolute",top:"0",right:"0",bottom:"0",left:"0",zIndex:"1"})})},A=e=>{let{title:t,description:i,children:n,...s}=e;return(0,r.jsx)(x.Flex,{py:"20",alignItems:"center",...s,children:(0,r.jsxs)(l.Container,{children:[(0,r.jsxs)(o.VStack,{spacing:[4,null,8],alignItems:"flex-start",children:[(0,r.jsx)(d.Text,{as:"h1",textStyle:"h1",textAlign:"left",children:t}),(0,r.jsx)(d.Text,{as:"div",textStyle:"subtitle",align:"left",color:"gray.500",_dark:{color:"gray.400"},children:i})]}),n]})})};var W=i(76723),Q=i(42789),R=i(83378),q=i(87427),U=i(23324),D=i(45652),P=i(5641),G=i(23963);let E=e=>{let{name:t,description:i,avatar:n,href:l,children:a,...c}=e;return(0,r.jsxs)(Q.Card,{position:"relative",...c,children:[(0,r.jsxs)(U.CardHeader,{display:"flex",flexDirection:"row",alignItems:"center",children:[(0,r.jsx)(D.Avatar,{name:t,src:n,size:"sm",bg:"transparent"}),(0,r.jsxs)(s.Stack,{spacing:"1",ms:"4",children:[(0,r.jsx)(u.Heading,{size:"sm",children:t}),(0,r.jsx)(d.Text,{color:"muted",size:"xs",children:i})]})]}),(0,r.jsxs)(P.CardBody,{children:[a,l&&(0,r.jsx)(g.rU,{href:l,position:"absolute",top:"4",right:"4",children:(0,r.jsx)(G.fWC,{})})]})]})},N=e=>{let{children:t,title:i,columns:n=[1,null,2],...l}=e;return(0,r.jsxs)(w,{...l,children:[(0,r.jsx)(z,{title:i}),(0,r.jsx)(b.SimpleGrid,{columns:n,spacing:"8",children:t})]})},O=e=>{let{children:t,title:i,...n}=e;return(0,r.jsxs)(W.GridItem,{as:Q.Card,borderRadius:"md",p:"8",flex:"1 0",alignItems:"flex-start",spacing:"8",overflow:"hidden",position:"relative",bg:"white",_dark:{bg:"gray.800"},...n,children:[i&&(0,r.jsx)(u.Heading,{fontSize:"3xl",mb:"8",children:i}),t]})},Y=e=>{let{name:t,description:i,avatar:l,children:s,gradient:a=["primary.500","secondary.500"],...c}=e,o=(0,V.useTheme)();return(0,r.jsxs)(O,{justifyContent:"center",_dark:{borderColor:"whiteAlpha.300"},p:"4",...c,children:[(0,r.jsx)(n.Box,{bgGradient:"linear(to-br, ".concat((0,q.DZ)(a[0],.8)(o),", ").concat((0,q.DZ)(a[1],.8)(o),")"),opacity:"1",position:"absolute",inset:"0px",pointerEvents:"none",zIndex:"0",_dark:{opacity:.5,filter:"blur(50px)"}}),(0,r.jsx)(E,{name:t,description:(0,r.jsx)(n.Box,{as:"span",color:"whiteAlpha.700",children:i}),avatar:l,border:"0",bg:"transparent",boxShadow:"none",color:"white",position:"relative",children:s})]})},Z=e=>{let{children:t,...i}=e;return(0,r.jsx)(w,{innerWidth:"container.xl",position:"relative",overflow:"hidden",...i,children:(0,r.jsx)(R.Grid,{templateColumns:{base:"repeat(1, 1fr)",lg:"repeat(3, 1fr)"},gap:8,position:"relative",children:t})})},J=e=>(0,r.jsxs)("svg",{viewBox:"0 0 998 257",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("path",{d:"M388.5 115.302c17.612 0 25.466 11.424 28.084 21.658l24.752-9.044c-4.76-18.564-21.896-38.08-53.074-38.08-33.32 0-59.262 25.704-59.262 61.404 0 35.224 25.942 61.642 59.976 61.642 30.464 0 47.838-19.754 53.312-37.842l-24.276-8.806c-2.618 8.806-10.948 21.42-29.036 21.42-17.374 0-32.368-13.09-32.368-36.414s14.994-35.938 31.892-35.938zM484.894 141.244c.476-14.756 8.806-26.18 24.038-26.18 17.374 0 23.8 11.424 23.8 25.704v68.544h27.608v-73.304c0-25.466-13.804-45.934-42.364-45.934-12.138 0-25.228 4.284-33.082 14.518V37h-27.608v172.312h27.608v-68.068zM577.29 177.896c0 18.326 14.994 34.986 39.27 34.986 18.802 0 30.226-9.52 35.7-18.326 0 9.282.952 14.042 1.19 14.756h25.704c-.238-1.19-1.428-8.092-1.428-18.564v-57.596c0-23.086-13.566-43.316-49.266-43.316-28.56 0-46.648 17.85-48.79 37.842l25.228 5.712c1.19-11.662 9.282-20.944 23.8-20.944 15.232 0 21.896 7.854 21.896 17.612 0 4.046-1.904 7.378-8.568 8.33l-29.75 4.522c-19.754 2.856-34.986 14.28-34.986 34.986zm44.506 13.328c-10.948 0-16.898-7.14-16.898-14.994 0-9.52 6.902-14.28 15.47-15.708L650.594 156v5.236c0 22.61-13.328 29.988-28.798 29.988zM810.108 93.406h-36.652l-44.506 46.886V37h-27.37v172.312h27.37v-32.368l14.28-14.994 34.034 47.362h33.796l-48.552-66.878 47.6-49.028zM889.349 92.692c-1.19-.238-4.046-.714-7.378-.714-15.232 0-28.084 7.378-33.558 19.992V93.406h-26.894v115.906h27.608v-55.216c0-21.658 9.758-34.034 31.178-34.034 2.856 0 5.95.238 9.044.714V92.692zM895.968 177.896c0 18.326 14.994 34.986 39.27 34.986 18.802 0 30.226-9.52 35.7-18.326 0 9.282.952 14.042 1.19 14.756h25.704c-.238-1.19-1.428-8.092-1.428-18.564v-57.596c0-23.086-13.566-43.316-49.266-43.316-28.56 0-46.648 17.85-48.79 37.842l25.228 5.712c1.19-11.662 9.282-20.944 23.8-20.944 15.232 0 21.896 7.854 21.896 17.612 0 4.046-1.904 7.378-8.568 8.33l-29.75 4.522c-19.754 2.856-34.986 14.28-34.986 34.986zm44.506 13.328c-10.948 0-16.898-7.14-16.898-14.994 0-9.52 6.902-14.28 15.47-15.708L969.272 156v5.236c0 22.61-13.328 29.988-28.798 29.988z",fill:(0,F.useColorModeValue)("black","white")}),(0,r.jsx)("rect",{width:"257",height:"257",rx:"128.5",fill:(0,F.useColorModeValue)("black","white")}),(0,r.jsx)("path",{d:"M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z",fill:(0,F.useColorModeValue)("white","black")})]}),X=e=>{let{...t}=e;return(0,r.jsx)("svg",{viewBox:"0 0 148 90",...t,children:(0,r.jsx)("path",{d:"M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z",fill:(0,F.useColorModeValue)("black","white"),fillRule:"nonzero"})})};var K=i(99667),$=i(26440),ee=i(27648);let et=e=>{let{href:t,children:i,...n}=e;return(0,r.jsx)(ee.default,{href:t,passHref:!0,children:(0,r.jsx)($.Button,{...n,children:i})})},ei=e=>{let{children:t,plans:i,title:l,description:s,...a}=e;return(0,r.jsxs)(w,{id:"pricing",pos:"relative",...a,children:[(0,r.jsx)(_,{height:"100%"}),(0,r.jsxs)(n.Box,{zIndex:"2",pos:"relative",children:[(0,r.jsx)(z,{title:l,description:s}),(0,r.jsx)(b.SimpleGrid,{columns:[1,null,3],spacing:4,children:null==i?void 0:i.map(e=>(0,r.jsxs)(el,{title:e.title,description:e.description,price:e.price,sx:e.isRecommended?{borderColor:"primary.500",_dark:{borderColor:"primary.500",bg:"blackAlpha.300"}}:{},children:[(0,r.jsx)(er,{children:e.features.map((e,t)=>e?(0,r.jsx)(en,{...e},t):(0,r.jsx)("br",{},t))}),(0,r.jsx)(et,{colorScheme:"primary",...e.action,children:e.action.label||"Sign Up"})]},e.id))}),t]})]})},er=e=>{let{children:t}=e;return(0,r.jsx)(o.VStack,{align:"stretch",justifyContent:"stretch",spacing:"4",mb:"8",flex:"1",children:t})},en=e=>{let{title:t,iconColor:i="primary.500"}=e;return(0,r.jsxs)(a.HStack,{children:[(0,r.jsx)(M.Icon,{as:f.UgA,color:i}),(0,r.jsx)(d.Text,{flex:"1",fontSize:"sm",children:t})]})},el=e=>{let{title:t,description:i,price:l,children:s,...a}=e;return(0,r.jsxs)(o.VStack,{zIndex:"2",bg:"whiteAlpha.600",borderRadius:"md",p:"8",flex:"1 0",alignItems:"stretch",border:"1px solid",borderColor:"gray.400",_dark:{bg:"blackAlpha.300",borderColor:"gray.800"},...a,children:[(0,r.jsx)(u.Heading,{as:"h3",size:"md",fontWeight:"bold",fontSize:"lg",mb:"2",children:t}),(0,r.jsx)(n.Box,{color:"muted",children:i}),(0,r.jsx)(n.Box,{fontSize:"2xl",fontWeight:"bold",py:"4",children:l}),(0,r.jsx)(o.VStack,{align:"stretch",justifyContent:"stretch",spacing:"4",flex:"1",children:s})]})},es=e=>{let{children:t,...i}=e;return(0,r.jsx)(d.Text,{color:(0,F.useColorModeValue)("black","white"),as:"em",fontStyle:"normal",...i,children:t})};var ea={title:"よくある質問",items:[{q:"この製品はどのデータベースをサポートしていますか？",a:"私たちの製品は、MySQL、SQL Server、PostgreSQLなど、主要なデータベースをサポートしています。今後も対応データベースを拡充予定です。"},{q:"異種データベース間でのクエリはどのように実行されますか？",a:"異種データベース間のクエリは、私たちの製品が提供する統合クエリエンジンを使用して実行されます。これにより、異なるデータベースからのデータを一つのクエリで取得できます。"},{q:"製品の導入にはどのくらいの時間がかかりますか？",a:"導入時間は企業の規模や既存のシステムによりますが、通常は数日から数週間で完了します。詳細な導入計画については、当社のサポートチームにお問い合わせください。"},{q:"セキュリティ対策はどのようになっていますか？",a:"私たちの製品は、データの暗号化、アクセス制御、監査ログなどの高度なセキュリティ機能を備えています。お客様のデータを安全に保護するため、最新のセキュリティ基準に準拠しています。"}]},ec={title:"あらゆる段階に対応した価格設定",description:"一度の支払いで、私たちの高品質なデータベースソリューションに生涯アクセス。",plans:[{id:"basic",title:"ベーシック",description:"基本機能を備えたプラン、初めての方に最適。",price:"無料",features:[{title:"基本的なデータ統合"},{title:"シームレスなクエリ実行"},{title:"ユーザーフレンドリーなインターフェース"},{title:"基本的なセキュリティ機能"},{title:"コミュニティサポート"},{title:"そしてもっと..."}],action:{href:"#"}},{id:"pro",title:"プロフェッショナル",description:"中小企業向けの完全なデータソリューション。",price:"\xa510,000/月",isRecommended:!0,features:[{title:"複数のデータベースサポート"},{title:"高度なセキュリティ機能"},{title:"カスタマイズ可能なクエリ"},{title:"優先サポート"},{title:"1年間のアップデート"},null,{title:"プライベートベータアクセス",iconColor:"green.500"}],action:{href:"#"}},{id:"enterprise",title:"エンタープライズ",description:"成長するチームのための無制限ライセンス。",price:(0,r.jsxs)(a.HStack,{children:[(0,r.jsx)(d.Text,{textDecoration:"line-through",fontSize:"sm",color:"gray.400",children:"\xa5300,000"}),(0,r.jsx)(d.Text,{children:"\xa5150,000"})]}),features:[{title:"無制限のプロジェクト"},{title:"無制限のユーザー"},{title:"1年間のアップデート"},{title:"プロフェッショナルプランの全機能"},null,{title:"プライベートベータアクセス",iconColor:"green.500"}],action:{href:"#"}}]},eo={title:"技術者に愛される製品",items:[{name:"田中 太郎",description:"データアナリスト",avatar:"/static/images/avatar1.jpg",children:(0,r.jsx)(r.Fragment,{children:"“このDB製品のおかげで、異なるデータベースからのデータを簡単に統合でき、分析の効率が大幅に向上しました。ROIは本当に驚くべきものです。”"})},{name:"山田 花子",description:"フルスタック開発者",avatar:"/static/images/avatar2.jpg",children:(0,r.jsx)(r.Fragment,{children:"“この製品を使えば、異種データベース間のクエリが非常に簡単に実行できます。導入もスムーズで、時間を大幅に節約できました。”"})},{name:"佐藤 健",description:"フロントエンドエンジニア",avatar:"/static/images/avatar3.jpg",children:(0,r.jsx)(r.Fragment,{children:"“このDB製品は、私たちのプロジェクトに完璧なスタート地点を提供してくれました。直感的なインターフェースと優れたサポートが特に気に入っています。”"})}]};let ed=()=>(0,r.jsxs)(n.Box,{position:"relative",overflow:"hidden",children:[(0,r.jsx)(_,{height:"100%",zIndex:"-1"}),(0,r.jsx)(l.Container,{maxW:"container.xl",pt:{base:40,lg:60},pb:"40",children:(0,r.jsxs)(s.Stack,{direction:{base:"column",lg:"row"},alignItems:"center",children:[(0,r.jsx)(A,{id:"home",justifyContent:"flex-start",px:"0",title:(0,r.jsxs)(K.F,{children:["異種データベース",(0,r.jsx)(g.Br,{})," 連携クエリソリューション"]}),description:(0,r.jsxs)(K.F,{delay:.4,fontWeight:"medium",children:["私たちのDB製品は、異なるデータベース間での",(0,r.jsx)(es,{children:"連携"}),"クエリを可能にします。",(0,r.jsx)(g.Br,{}),"MySQLとSQL Serverのような異種データベースをシームレスに結合し、効率的なデータ分析を実現します。"]}),children:(0,r.jsx)(K.F,{delay:.8,children:(0,r.jsxs)(a.HStack,{pt:"4",pb:"12",spacing:"8",children:[(0,r.jsx)(X,{height:"28px",width:"20px"})," ",(0,r.jsx)(J,{height:"20px"})]})})}),(0,r.jsx)(n.Box,{height:"600px",position:"absolute",display:{base:"none",lg:"block"},left:{lg:"60%",xl:"55%"},width:"80vw",maxW:"1100px",margin:"0 auto",children:(0,r.jsx)(K.F,{delay:1,children:(0,r.jsx)(n.Box,{overflow:"hidden",height:"100%",children:(0,r.jsx)(m.default,{src:"/calcite-landing-page/static/screenshots/list.png",width:1200,height:762,alt:"Screenshot of a ListPage in Saas UI Pro",quality:"75",priority:!0})})})})]})}),(0,r.jsx)(T,{id:"benefits",columns:[1,2,4],iconSize:4,innerWidth:"container.xl",pt:"20",features:[{title:"異種データベース連携",icon:f.jMy,description:" MySQL、SQL Server、PostgreSQLなど、さまざまなデータベースをサポート。",iconPosition:"left",delay:.6},{title:"高性能クエリ",icon:f.NNy,description:"大量データに対する迅速なクエリ処理。",iconPosition:"left",delay:.8},{title:"ユーザーフレンドリーなインターフェース",icon:f.aCJ,description:"直感的な操作で簡単にデータを管理",iconPosition:"left",delay:1},{title:"シームレスなデータ統合",icon:f.fmn,description:"異なるデータベースからのデータを一つのクエリで統合し、複雑なデータ分析を簡単に行えます。",iconPosition:"left",delay:1.1}],reveal:K.F})]}),ex=()=>{let{value:e,onCopy:t,hasCopied:i}=(0,c.useClipboard)("yarn add @saas-ui/react");return(0,r.jsxs)(Z,{children:[(0,r.jsx)(O,{colSpan:[1,null,2],title:"コアコンポーネント",children:(0,r.jsxs)(o.VStack,{alignItems:"flex-start",spacing:"8",children:[(0,r.jsxs)(d.Text,{color:"muted",fontSize:"xl",children:["無料で始められる",(0,r.jsx)(es,{children:"30以上のオープンソースコンポーネント"}),"。Clerk、Supabase、Magicを使った認証画面を含む。React Hook Formを使った完全な機能のフォーム。React Tableを使ったデータテーブル。"]}),(0,r.jsxs)(x.Flex,{rounded:"full",borderWidth:"1px",flexDirection:"row",alignItems:"center",py:"1",ps:"8",pe:"2",bg:"primary.900",_dark:{bg:"gray.900"},children:[(0,r.jsxs)(n.Box,{children:[(0,r.jsx)(d.Text,{color:"yellow.400",display:"inline",children:"yarn add"})," ",(0,r.jsx)(d.Text,{color:"cyan.300",display:"inline",children:"@saas-ui/react"})]}),(0,r.jsx)(h.IconButton,{icon:i?(0,r.jsx)(f.UgA,{}):(0,r.jsx)(f.C3L,{}),"aria-label":"Copy install command",onClick:t,variant:"ghost",ms:"4",isRound:!0,color:"white"})]})]})}),(0,r.jsx)(O,{title:"堅実な基盤",children:(0,r.jsx)(d.Text,{color:"muted",fontSize:"lg",children:"私たちは車輪の再発明を好みませんし、あなたもそうすべきではありません。私たちは最も生産的で確立されたツールを選び、Saas UIをその上に構築しました。"})}),(0,r.jsx)(Y,{name:"Renata Alink",description:"創業者",avatar:"/static/images/avatar.jpg",gradient:["pink.200","purple.500"],children:"“Saas UIは、私たちが美しいモダンなUIをすぐにセットアップするのを助けてくれました。開発時間を数百時間節約し、特定のユースケースに対するビジネスロジックに集中することができました。”"}),(0,r.jsxs)(O,{colSpan:[1,null,2],title:"次のアイデアを2ステップ先に進める",children:[(0,r.jsx)(d.Text,{color:"muted",fontSize:"lg",children:"私たちはあなたの基本的なフロントエンドのニーズをすべて解決しましたので、あなたの製品をユニークにする機能の構築を始めることができます。"}),(0,r.jsx)(p.Wrap,{mt:"8",children:["認証","ナビゲーション","CRUD","設定","マルチテナンシー","レイアウト","請求","アクセシビリティテスト","サーバーサイドレンダリング","ドキュメンテーション","オンボーディング","ストーリーブック","テーマ","アップセル","単体テスト","機能フラグ","レスポンシブ"].map(e=>(0,r.jsx)(j.Tag,{variant:"subtle",colorScheme:"purple",rounded:"full",px:"3",children:e},e))})]})]})},eh=()=>(0,r.jsx)(T,{id:"features",title:(0,r.jsxs)(u.Heading,{lineHeight:"short",fontSize:["2xl",null,"4xl"],textAlign:"left",as:"p",children:["市場初の",(0,r.jsx)(g.Br,{})," 異種データベース連携ソリューション。"]}),description:(0,r.jsxs)(r.Fragment,{children:["私たちの製品は、異なるデータベース間での連携クエリを可能にします。",(0,r.jsx)(g.Br,{}),"データ分析を次のレベルへと引き上げるための完璧な基盤です。"]}),align:"left",columns:[1,2,3],iconSize:4,features:[{title:"異種データベース連携",icon:f.Wpg,description:"MySQL、SQL Server、PostgreSQLなど、さまざまなデータベースをシームレスに統合。",variant:"inline"},{title:"高性能クエリ",icon:f.UIZ,description:"大量データに対する迅速なクエリ処理で、ビジネスインテリジェンスを強化。",variant:"inline"},{title:"ユーザーフレンドリー",icon:f.jRj,description:"直感的なインターフェースで、専門知識がなくても簡単に操作可能。",variant:"inline"},{title:"セキュリティ",icon:f.zy7,description:"データの暗号化、アクセス制御、監査ログなどの高度なセキュリティ機能を提供。",variant:"inline"},{title:"スケーラビリティ",icon:f.MJI,description:"企業の成長に合わせてスケールアップ可能な設計。",variant:"inline"},{title:"データ統合",icon:f.QqI,description:"異なるシステム間でのデータ統合を容易にし、包括的な分析を実施。",variant:"inline"},{title:"カスタマイズ可能",icon:f.gU9,description:"お客様のニーズに合わせて柔軟にカスタマイズ可能。",variant:"inline"},{title:"サポート",icon:f.cDN,description:"導入から運用まで、専門のサポートチームがバックアップ。",variant:"inline"},{title:"ドキュメンテーション",icon:f.xqv,description:(0,r.jsx)(r.Fragment,{children:"詳細なドキュメンテーションとベストプラクティスを提供し、迅速な導入をサポート。"}),variant:"inline"}]}),ep=()=>{let e=v.useMemo(()=>eo.items.reduce((e,t,i)=>(e[i%3].push(t),e),[[],[],[]]),[]);return(0,r.jsx)(N,{title:eo.title,columns:[1,2,3],innerWidth:"container.xl",children:(0,r.jsx)(r.Fragment,{children:e.map((e,t)=>(0,r.jsx)(s.Stack,{spacing:"8",children:e.map((e,t)=>(0,r.jsx)(E,{...e},t))},t))})})},ej=()=>(0,r.jsx)(ei,{...ec,children:(0,r.jsx)(d.Text,{p:"8",textAlign:"center",color:"muted",children:"お住まいの地域によっては、VATが適用される場合があります。"})}),eu=()=>(0,r.jsx)(C,{...ea});var eg=()=>(0,r.jsxs)(n.Box,{children:[(0,r.jsx)(ed,{}),(0,r.jsx)(ex,{}),(0,r.jsx)(eh,{}),(0,r.jsx)(ep,{}),(0,r.jsx)(ej,{}),(0,r.jsx)(eu,{})]})},99667:function(e,t,i){"use strict";i.d(t,{F:function(){return s}});var r=i(57437);i(2265);var n=i(81284);let l=i(24756).E.create(n.chakra.div),s=e=>{let{children:t,delay:i=.2,...n}=e;return(0,r.jsx)(l,{initial:{scale:1,opacity:0,translateY:"20px"},animate:{scale:1,opacity:1,translateY:0},transition:{type:"tween",ease:"easeOut",duration:2,delay:i},...n,children:t})}}},function(e){e.O(0,[784,894,341,9,959,971,117,744],function(){return e(e.s=2475)}),_N_E=e.O()}]);