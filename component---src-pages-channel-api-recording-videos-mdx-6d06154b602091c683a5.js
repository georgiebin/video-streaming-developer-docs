"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5093],{57883:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return o},default:function(){return m}});var a=n(63366),r=(n(67294),n(64983)),l=n(55602),i=["components"],o={},d={_frontmatter:o},p=l.Z;function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)(p,Object.assign({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Get time limit of recorded videos"),(0,r.kt)("p",null,"Returns the maximum allowed length of recorded videos for the channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channel_id}/limits/recording.json\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"This request has no parameters."),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pair."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Time limit in seconds")))),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_token")),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h2",null,"Get recording status"),(0,r.kt)("p",null,"Returns information on recording status during live broadcasts done on a channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channel_id}/recorder.json\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"This request has no parameters."),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned. If the channel has a live broadcast running, it also returns the following key-value pairs under a ",(0,r.kt)("inlineCode",{parentName:"p"},"video")," element."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique ID of the video that is being recorded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Video URL")))),(0,r.kt)("p",null,"Example of a success response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "video": {\n    "id": "11111",\n    "url": "https://api.video.ibm.com/videos/11111.json"\n  }\n}\n')),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h2",null,"Start/stop recording"),(0,r.kt)("p",null,"Control recording during live broadcast on a channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST https://api.video.ibm.com/channels/{channel_id}/recorder.json\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"The parameters for the POST request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"command")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported values: ",(0,r.kt)("inlineCode",{parentName:"td"},"start")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"stop"))))),(0,r.kt)("p",null,"Example of the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /channels/42/recorder.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\ncommand=stop\n")),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “202 Accepted” is returned. If the channel has a live broadcast running, it also returns the following key-value pairs under a video element."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique ID of the video that is being recorded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Video URL")))),(0,r.kt)("p",null,"There’s no direct feedback on the results of the operation."),(0,r.kt)("p",null,"Example of a success response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "video": {\n    "id": "11111",\n    "url": "https://api.video.ibm.com/videos/11111.json"\n  }\n}\n')),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h2",null,"Control auto-recording"),(0,r.kt)("p",null,"A video on demand recording can be automatically created when live broadcasting that is made available to viewers after the live stream. The behavior can be controlled by this resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/channels/{channel_id}/settings/autorecord.json\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"The parameters for the PUT request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported values: ",(0,r.kt)("inlineCode",{parentName:"td"},"disabled")," – no auto-recorded video gets created for the channel when broadcasting; ",(0,r.kt)("inlineCode",{parentName:"td"},"private")," – the new auto-record will be private by default; ",(0,r.kt)("inlineCode",{parentName:"td"},"public")," – the created auto-records will be public by default")))),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_value")),(0,r.kt)("td",{parentName:"tr",align:null},"The specified value is invalid or unsupported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_token")),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"402 Payment Required"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_request")),(0,r.kt)("td",{parentName:"tr",align:null},"The user does not have the benefit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-recording-videos-mdx-6d06154b602091c683a5.js.map