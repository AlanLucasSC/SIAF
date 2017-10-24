/*
 Highcharts JS v6.0.2 (2017-10-20)

 (c) 2016 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(z){"object"===typeof module&&module.exports?module.exports=z:z(Highcharts)})(function(z){(function(b){var u=b.deg2rad,f=b.isNumber,k=b.pick,A=b.relativeLength;b.CenteredSeriesMixin={getCenter:function(){var b=this.options,t=this.chart,q=2*(b.slicedOffset||0),l=t.plotWidth-2*q,t=t.plotHeight-2*q,v=b.center,v=[k(v[0],"50%"),k(v[1],"50%"),b.size||"100%",b.innerSize||0],f=Math.min(l,t),w,B;for(w=0;4>w;++w)B=v[w],b=2>w||2===w&&/%$/.test(B),v[w]=A(B,[l,t,f,v[2]][w])+(b?q:0);v[3]>v[2]&&(v[3]=v[2]);
return v},getStartAndEndRadians:function(b,t){b=f(b)?b:0;t=f(t)&&t>b&&360>t-b?t:b+360;return{start:u*(b+-90),end:u*(t+-90)}}}})(z);var O=function(){return function(b){var u=this,f=u.graphic,k=b.animate,A=b.attr,p=b.onComplete,t=b.css,q=b.group,l=b.renderer,v=b.shapeArgs;b=b.shapeType;u.shouldDraw()?(f||(u.graphic=f=l[b](v).add(q)),f.css(t).attr(A).animate(k,void 0,p)):f&&f.animate(k,void 0,function(){u.graphic=f=f.destroy();"function"===typeof p&&p()})}}(),K=function(b){var u=b.each,f=b.extend,k=
b.pick;return{getColor:function(f,p){var t=p.index,q=p.levelMap,l=p.parentColor,v=p.parentColorIndex,u=p.series,w=p.colors,B=p.siblings,m=u.points,x,F,A;if(f){m=m[f.i];f=q[f.levelDynamic]||{};(x=m&&("boolean"===typeof f.colorByPoint?f.colorByPoint:!!u.options.colorByPoint))&&(F=w[m.index%w.length]);w=m&&m.options.color;x=f&&f.color;if(q=l)q=(q=f&&f.colorVariation)&&"brightness"===q.key?b.color(l).brighten(t/B*q.to).get():l;x=k(w,x,F,q,u.color);A=k(m&&m.options.colorIndex,f&&f.colorIndex,v,p.colorIndex)}return{color:x,
colorIndex:A}},setTreeValues:function p(b,q){var l=q.before,v=q.idRoot,t=q.mapIdToNode[v],w=q.points[b.i],B=w&&w.options||{},m=0,x=[];f(b,{levelDynamic:b.level-(("boolean"===typeof q.levelIsConstant?q.levelIsConstant:1)?0:t.level),name:k(w&&w.name,""),visible:v===b.id||("boolean"===typeof q.visible?q.visible:!1)});"function"===typeof l&&(b=l(b,q));u(b.children,function(l,k){var t=f({},q);f(t,{index:k,siblings:b.children.length,visible:b.visible});l=p(l,t);x.push(l);l.visible&&(m+=l.val)});b.visible=
0<m||b.visible;l=k(B.value,m);f(b,{children:x,childrenTotal:m,isLeaf:b.visible&&!m,val:l});return b}}}(z);(function(b,u){var f=b.seriesType,k=b.seriesTypes,A=b.map,p=b.merge,t=b.extend,q=b.noop,l=b.each,v=u.getColor,z=b.grep,w=b.isNumber,B=b.isString,m=b.pick,x=b.Series,F=b.stableSort,L=b.Color,I=function(a,e,d){d=d||this;b.objectEach(a,function(c,g){e.call(d,c,g,a)})},G=b.reduce,H=function(a,e,d){d=d||this;a=e.call(d,a);!1!==a&&H(a,e,d)};f("treemap","scatter",{showInLegend:!1,marker:!1,dataLabels:{enabled:!0,
defer:!1,verticalAlign:"middle",formatter:function(){return this.point.name||this.point.id},inside:!0},tooltip:{headerFormat:"",pointFormat:"\x3cb\x3e{point.name}\x3c/b\x3e: {point.value}\x3cbr/\x3e"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,opacity:.15,states:{hover:{borderColor:"#999999",brightness:k.heatmap?0:.1,halo:!1,
opacity:.75,shadow:!1}}},{pointArrayMap:["value"],axisTypes:k.heatmap?["xAxis","yAxis","colorAxis"]:["xAxis","yAxis"],directTouch:!0,optionalAxis:"colorAxis",getSymbol:q,parallelArrays:["x","y","value","colorValue"],colorKey:"colorValue",translateColors:k.heatmap&&k.heatmap.prototype.translateColors,colorAttribs:k.heatmap&&k.heatmap.prototype.colorAttribs,trackerGroups:["group","dataLabelsGroup"],getListOfParents:function(a,e){a=G(a||[],function(a,c,e){c=m(c.parent,"");void 0===a[c]&&(a[c]=[]);a[c].push(e);
return a},{});I(a,function(a,c,g){""!==c&&-1===b.inArray(c,e)&&(l(a,function(a){g[""].push(a)}),delete g[c])});return a},getTree:function(){var a=A(this.data,function(a){return a.id}),a=this.getListOfParents(this.data,a);this.nodeMap=[];return this.buildNode("",-1,0,a,null)},init:function(a,e){x.prototype.init.call(this,a,e);this.options.allowDrillToNode&&b.addEvent(this,"click",this.onClickDrillToNode)},buildNode:function(a,e,d,c,g){var b=this,h=[],n=b.points[e],y=0,r;l(c[a]||[],function(e){r=b.buildNode(b.points[e].id,
e,d+1,c,a);y=Math.max(r.height+1,y);h.push(r)});e={id:a,i:e,children:h,height:y,level:d,parent:g,visible:!1};b.nodeMap[e.id]=e;n&&(n.node=e);return e},setTreeValues:function(a){var e=this,d=e.options,c=e.nodeMap[e.rootNode],d="boolean"===typeof d.levelIsConstant?d.levelIsConstant:!0,g=0,b=[],h,n=e.points[a.i];l(a.children,function(a){a=e.setTreeValues(a);b.push(a);a.ignore||(g+=a.val)});F(b,function(a,c){return a.sortIndex-c.sortIndex});h=m(n&&n.options.value,g);n&&(n.value=h);t(a,{children:b,childrenTotal:g,
ignore:!(m(n&&n.visible,!0)&&0<h),isLeaf:a.visible&&!g,levelDynamic:a.level-(d?0:c.level),name:m(n&&n.name,""),sortIndex:m(n&&n.sortIndex,-h),val:h});return a},calculateChildrenAreas:function(a,e){var d=this,c=d.options,g=this.levelMap[a.levelDynamic+1],b=m(d[g&&g.layoutAlgorithm]&&g.layoutAlgorithm,c.layoutAlgorithm),h=c.alternateStartingDirection,n=[];a=z(a.children,function(a){return!a.ignore});g&&g.layoutStartingDirection&&(e.direction="vertical"===g.layoutStartingDirection?0:1);n=d[b](e,a);l(a,
function(a,c){c=n[c];a.values=p(c,{val:a.childrenTotal,direction:h?1-e.direction:e.direction});a.pointValues=p(c,{x:c.x/d.axisRatio,width:c.width/d.axisRatio});a.children.length&&d.calculateChildrenAreas(a,a.values)})},setPointValues:function(){var a=this,e=a.xAxis,d=a.yAxis;l(a.points,function(c){var g=c.node,b=g.pointValues,h,n,y;y=(a.pointAttribs(c)["stroke-width"]||0)%2/2;b&&g.visible?(g=Math.round(e.translate(b.x,0,0,0,1))-y,h=Math.round(e.translate(b.x+b.width,0,0,0,1))-y,n=Math.round(d.translate(b.y,
0,0,0,1))-y,b=Math.round(d.translate(b.y+b.height,0,0,0,1))-y,c.shapeType="rect",c.shapeArgs={x:Math.min(g,h),y:Math.min(n,b),width:Math.abs(h-g),height:Math.abs(b-n)},c.plotX=c.shapeArgs.x+c.shapeArgs.width/2,c.plotY=c.shapeArgs.y+c.shapeArgs.height/2):(delete c.plotX,delete c.plotY)})},setColorRecursive:function(a,e,d,c,b){var g=this,h=g&&g.chart,h=h&&h.options&&h.options.colors,n;if(a){n=v(a,{colors:h,index:c,levelMap:g.levelMap,parentColor:e,parentColorIndex:d,series:g,siblings:b});if(e=g.points[a.i])e.color=
n.color,e.colorIndex=n.colorIndex;l(a.children||[],function(c,e){g.setColorRecursive(c,n.color,n.colorIndex,e,a.children.length)})}},algorithmGroup:function(a,e,d,c){this.height=a;this.width=e;this.plot=c;this.startDirection=this.direction=d;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,c){return Math.max(a/c,c/a)}};this.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===this.direction?
(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};this.reset=function(){this.lW=this.nW=0;this.elArr=
[];this.total=0}},algorithmCalcPoints:function(a,e,d,c){var b,M,h,n,y=d.lW,r=d.lH,f=d.plot,q,m=0,k=d.elArr.length-1;e?(y=d.nW,r=d.nH):q=d.elArr[d.elArr.length-1];l(d.elArr,function(a){if(e||m<k)0===d.direction?(b=f.x,M=f.y,h=y,n=a/h):(b=f.x,M=f.y,n=r,h=a/n),c.push({x:b,y:M,width:h,height:n}),0===d.direction?f.y+=n:f.x+=h;m+=1});d.reset();0===d.direction?d.width-=y:d.height-=r;f.y=f.parent.y+(f.parent.height-d.height);f.x=f.parent.x+(f.parent.width-d.width);a&&(d.direction=1-d.direction);e||d.addElement(q)},
algorithmLowAspectRatio:function(a,b,d){var c=[],e=this,f,h={x:b.x,y:b.y,parent:b},n=0,y=d.length-1,r=new this.algorithmGroup(b.height,b.width,b.direction,h);l(d,function(d){f=d.val/b.val*b.height*b.width;r.addElement(f);r.lP.nR>r.lP.lR&&e.algorithmCalcPoints(a,!1,r,c,h);n===y&&e.algorithmCalcPoints(a,!0,r,c,h);n+=1});return c},algorithmFill:function(a,b,d){var c=[],g,e=b.direction,h=b.x,n=b.y,f=b.width,r=b.height,q,m,k,t;l(d,function(d){g=d.val/b.val*b.height*b.width;q=h;m=n;0===e?(t=r,k=g/t,f-=
k,h+=k):(k=f,t=g/k,r-=t,n+=t);c.push({x:q,y:m,width:k,height:t});a&&(e=1-e)});return c},strip:function(a,b){return this.algorithmLowAspectRatio(!1,a,b)},squarified:function(a,b){return this.algorithmLowAspectRatio(!0,a,b)},sliceAndDice:function(a,b){return this.algorithmFill(!0,a,b)},stripes:function(a,b){return this.algorithmFill(!1,a,b)},translate:function(){var a=this,b=a.rootNode=m(a.rootNode,a.options.rootId,""),d,c;x.prototype.translate.call(a);a.levelMap=G(a.options.levels||[],function(a,b){a[b.level]=
b;return a},{});c=a.tree=a.getTree();d=a.nodeMap[b];""===b||d&&d.children.length||(a.drillToNode("",!1),b=a.rootNode,d=a.nodeMap[b]);H(a.nodeMap[a.rootNode],function(b){var c=!1,d=b.parent;b.visible=!0;if(d||""===d)c=a.nodeMap[d];return c});H(a.nodeMap[a.rootNode].children,function(a){var b=!1;l(a,function(a){a.visible=!0;a.children.length&&(b=(b||[]).concat(a.children))});return b});a.setTreeValues(c);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=b={x:0,y:0,width:100,height:100};
a.nodeMap[""].values=b=p(b,{width:b.width*a.axisRatio,direction:"vertical"===a.options.layoutStartingDirection?0:1,val:c.val});a.calculateChildrenAreas(c,b);a.colorAxis?a.translateColors():a.options.colorByPoint||a.setColorRecursive(a.tree);a.options.allowDrillToNode&&(d=d.pointValues,a.xAxis.setExtremes(d.x,d.x+d.width,!1),a.yAxis.setExtremes(d.y,d.y+d.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()},drawDataLabels:function(){var a=this,b=z(a.points,function(a){return a.node.visible}),
d,c;l(b,function(b){c=a.levelMap[b.node.levelDynamic];d={style:{}};b.node.isLeaf||(d.enabled=!1);c&&c.dataLabels&&(d=p(d,c.dataLabels),a._hasPointLabels=!0);b.shapeArgs&&(d.style.width=b.shapeArgs.width,b.dataLabel&&b.dataLabel.css({width:b.shapeArgs.width+"px"}));b.dlOptions=p(d,b.options.dataLabels)});x.prototype.drawDataLabels.call(this)},alignDataLabel:function(a){k.column.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})},pointAttribs:function(a,
b){var d=a&&this.levelMap[a.node.levelDynamic]||{},c=this.options,g=b&&c.states[b]||{},e=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||d.borderColor||g.borderColor||c.borderColor,"stroke-width":m(a&&a.borderWidth,d.borderWidth,g.borderWidth,c.borderWidth),dashstyle:a&&a.borderDashStyle||d.borderDashStyle||g.borderDashStyle||c.borderDashStyle,fill:a&&a.color||this.color};-1!==e.indexOf("highcharts-above-level")?(a.fill="none",a["stroke-width"]=0):-1!==e.indexOf("highcharts-internal-node-interactive")?
(b=m(g.opacity,c.opacity),a.fill=L(a.fill).setOpacity(b).get(),a.cursor="pointer"):-1!==e.indexOf("highcharts-internal-node")?a.fill="none":b&&(a.fill=L(a.fill).brighten(g.brightness).get());return a},drawPoints:function(){var a=this,b=z(a.points,function(a){return a.node.visible});l(b,function(b){var c="level-group-"+b.node.levelDynamic;a[c]||(a[c]=a.chart.renderer.g(c).attr({zIndex:1E3-b.node.levelDynamic}).add(a.group));b.group=a[c]});k.column.prototype.drawPoints.call(this);a.options.allowDrillToNode&&
l(b,function(b){b.graphic&&(b.drillId=a.options.interactByLeaf?a.drillToByLeaf(b):a.drillToByGroup(b))})},onClickDrillToNode:function(a){var b=(a=a.point)&&a.drillId;B(b)&&(a.setState(""),this.drillToNode(b))},drillToByGroup:function(a){var b=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(b=a.id);return b},drillToByLeaf:function(a){var b=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!b;)a=this.nodeMap[a.parent],a.parent===this.rootNode&&(b=a.id);return b},
drillUp:function(){var a=this.nodeMap[this.rootNode];a&&B(a.parent)&&this.drillToNode(a.parent)},drillToNode:function(a,b){var d=this.nodeMap[a];this.idPreviousRoot=this.rootNode;this.rootNode=a;""===a?this.drillUpButton=this.drillUpButton.destroy():this.showDrillUpButton(d&&d.name||a);this.isDirty=!0;m(b,!0)&&this.chart.redraw()},showDrillUpButton:function(a){var b=this;a=a||"\x3c Back";var d=b.options.drillUpButton,c,g;d.text&&(a=d.text);this.drillUpButton?this.drillUpButton.attr({text:a}).align():
(g=(c=d.theme)&&c.states,this.drillUpButton=this.chart.renderer.button(a,null,null,function(){b.drillUp()},c,g&&g.hover,g&&g.select).attr({align:d.position.align,zIndex:7}).add().align(d.position,!1,d.relativeTo||"plotBox"))},buildKDTree:q,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,getExtremes:function(){x.prototype.getExtremes.call(this,this.colorValueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;x.prototype.getExtremes.call(this)},getExtremesFromAll:!0,bindAxes:function(){var a=
{endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};x.prototype.bindAxes.call(this);b.extend(this.yAxis.options,a);b.extend(this.xAxis.options,a)},utils:{recursive:H,reduce:G}},{getClassName:function(){var a=b.Point.prototype.getClassName.call(this),e=this.series,d=e.options;this.node.level<=e.nodeMap[e.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||m(d.interactByLeaf,!d.allowDrillToNode)?
this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";return a},isValid:function(){return this.id||w(this.value)},setState:function(a){b.Point.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})},setVisible:k.pie.prototype.pointClass.prototype.setVisible})})(z,K);(function(b,u,f){var k=b.CenteredSeriesMixin,A=b.Series,p=b.each,t=b.extend,q=k.getCenter,l=f.getColor,v=k.getStartAndEndRadians,z=b.grep,w=b.isNumber,B=b.isObject,
m=b.isString,x=b.merge,F=b.pick,L=180/Math.PI,k=b.seriesType,I=f.setTreeValues,G=b.reduce,H=function(a,b){var c=a.start,d=a.end-c,e=a.val,n=a.x,f=a.y,r=a.r,k=r+a.radius;return G(b||[],function(b,g){g={x:n,y:f,innerR:r,r:k,radius:a.radius,start:c,end:c+1/e*g.val*d};b.push(g);c=g.end;return b},[])},a=function c(a,b){var g=[];a=z(a.children,function(a){return a.visible});g=H(b,a);p(a,function(a,b){b=g[b];var e=b.start+(b.end-b.start)/2,f=b.innerR+(b.r-b.innerR)/2,e=0===b.innerR&&6.28<b.end-b.start?{x:b.x,
y:b.y}:{x:b.x+Math.cos(e)*f,y:b.y+Math.sin(e)*f},f=a.val?a.childrenTotal>a.val?a.childrenTotal:a.val:a.childrenTotal;a.shapeArgs=x(b,{plotX:e.x,plotY:e.y});a.values=x(b,{val:f});a.children.length&&c(a,a.values)})},e=function(a,b){var c=b.mapIdToNode[a.parent],e=b.series,g=e.chart,f=e.points[a.i];b=l(a,{colors:g&&g.options&&g.options.colors,colorIndex:e.colorIndex,colorByPoint:e.colorByPoint,index:b.index,levelMap:b.levelMap,parentColor:c&&c.color,parentColorIndex:c&&c.colorIndex,series:b.series,siblings:b.siblings});
a.color=b.color;a.colorIndex=b.colorIndex;f&&(f.color=a.color,f.colorIndex=a.colorIndex);return a};k("sunburst","treemap",{center:["50%","50%"],dataLabels:{defer:!0,style:{textOverflow:"ellipsis"},rotationMode:"perpendicular"},rootId:void 0,levelIsConstant:!0},{drawDataLabels:b.noop,drawPoints:function(){var a=this,b=a.levelMap,e=a.shapeRoot,f=a.group,n=a.hasRendered,k=a.rootNode,q=a.idPreviousRoot,l=a.nodeMap,m=l[q],v=m&&m.shapeArgs,m=a.points,u=a.startAndEndRadians,C=a.chart,C=C&&C.options&&C.options.chart||
{},z="boolean"===typeof C.animation?C.animation:!0,C=a.center,F=C[0],G=C[1],J=C[3]/2,H=a.chart.renderer,I,K=!1,N=!1;if(C=!!(z&&n&&k!==q&&a.dataLabelsGroup))a.dataLabelsGroup.attr({opacity:0}),I=function(){K=!0;a.dataLabelsGroup&&a.dataLabelsGroup.animate({opacity:1,visibility:"visible"})};p(m,function(c){var g,m,h=c.node,r=b[h.levelDynamic];g=c.shapeExisting||{};var p=h.shapeArgs||{},y=a.pointAttribs(c,c.selected&&"select"),C,A=!(!h.visible||!h.shapeArgs);if(n&&z){var D={};m={end:p.end,start:p.start,
innerR:p.innerR,r:p.r,x:F,y:G};A?!c.graphic&&v&&(D=k===c.id?{start:u.start,end:u.end}:v.end<=p.start?{start:u.end,end:u.end}:{start:u.start,end:u.start},D.innerR=D.r=J):c.graphic&&(q===c.id?m={innerR:J,r:J}:e&&(m=e.end<=g.start?{innerR:J,r:J,start:u.end,end:u.end}:{innerR:J,r:J,start:u.start,end:u.start}));g=D}else m=p,g={};var D=[p.plotX,p.plotY],E;c.node.isLeaf||(k===c.id?(E=l[k],E=E.parent):E=c.id);t(c,{shapeExisting:p,tooltipPos:D,drillId:E,name:""+(c.name||c.id||c.index),plotX:p.plotX,plotY:p.plotY,
value:h.val,isNull:!A});D=c.options;E=a.options;h=B(p)?p:{};E=B(E)?E.dataLabels:{};D=B(D)?D.dataLabels:{};r=B(r)?r.dataLabels:{};r=x({rotationMode:"perpendicular",style:{width:h.radius}},E,r,D);w(r.rotation)||(h=h.end-(h.end-h.start)/2,h=h*L%180,"parallel"===r.rotationMode&&(h-=90),90<h&&(h-=180),r.rotation=h);0===r.rotation&&(r.rotation=.001);c.dlOptions=r;!N&&A&&(N=!0,C=I);c.draw({animate:m,attr:t(g,y),onComplete:C,group:f,renderer:H,shapeType:"arc",shapeArgs:p})});C&&N?(a.hasRendered=!1,a.options.dataLabels.defer=
!0,A.prototype.drawDataLabels.call(a),a.hasRendered=!0,K&&I()):A.prototype.drawDataLabels.call(a)},pointAttribs:b.seriesTypes.column.prototype.pointAttribs,translate:function(){var b=this.options,g=this.center=q.call(this),f=this.startAndEndRadians=v(b.startAngle,b.endAngle),h=g[3]/2,n=g[2]/2,k=this.rootNode=F(this.rootNode,b.rootId,""),r=this.nodeMap,p,l=r&&r[k],t,u;this.shapeRoot=l&&l.shapeArgs;A.prototype.translate.call(this);this.levelMap=G(this.options.levels||[],function(a,b){a[b.level]=b;return a},
{});u=this.tree=this.getTree();r=this.nodeMap;l=r[k];p=m(l.parent)?l.parent:"";t=r[p];I(u,{before:e,idRoot:k,levelIsConstant:b.levelIsConstant,levelMap:this.levelMap,mapIdToNode:r,points:this.points,series:this});b=r[""].shapeArgs={end:f.end,r:h,radius:(n-h)/(k===p?l.height:l.height+1),start:f.start,val:t.val,x:g[0],y:g[1]};a(t,b)},animate:function(a){var b=this.chart,c=[b.plotWidth/2,b.plotHeight/2],e=b.plotLeft,f=b.plotTop,b=this.group;a?(a={translateX:c[0]+e,translateY:c[1]+f,scaleX:.001,scaleY:.001,
rotation:10,opacity:.01},b.attr(a)):(a={translateX:e,translateY:f,scaleX:1,scaleY:1,rotation:0,opacity:1},b.animate(a,this.options.animation),this.animate=null)}},{draw:u,shouldDraw:function(){return!this.isNull}})})(z,O,K)});