/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'page1-asset2',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)","landing.png",'0px','0px']
                        },
                       /* {
                            id: 'page1-asset1',
                            type: 'image',
                            rect: ['56px', '106px', '583px', '105px', 'auto', 'auto'],
                           fill: ["rgba(0,0,0,0)",im+"page1-asset1.png",'0px','0px']
                        },*/
                        {
                            id: 'menu',
                            symbolName: 'menu',
                            type: 'rect',
                            rect: ['16', '680px', '989', '79', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                
				timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "menu": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
						/*{
                            rect: ['0px', '10px', '130px', '33px', 'auto', 'auto'],
                            id: 'inactive1',
                            fill: ['rgba(0,0,0,0)', 'inactive1.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },*/
                        {
                            rect: ['143px', '10px', '130px', '33px', 'auto', 'auto'],
                            id: 'active1',
                            fill: ['rgba(0,0,0,0)', 'active1.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '989px', '79px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Visit4-Gastro-2_edgeActions.js");
})("EDGE-3046095798");


