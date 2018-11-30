initMap = function () {
    let map = L.map('paacmap', {scrollWheelZoom: SHOULD_ZOOM}).setView([40.448690, -79.983327], 12);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoiam1zZnJ1aXRpc29uIiwiYSI6ImNqNXZ1cmt3dDA1eHgzMmxlMmdmcWwxcW8ifQ.1HQR26PenLL2SKVEvb0rTw'
    }).addTo(map);
    L.polyline([[40.456656, -79.932410],[40.459399, -79.922860],[40.457519, -79.911937],[40.452813, -79.898947],[40.446128, -79.888401]], {color: 'red', weight: 5}).addTo(map).bindTooltip('P1, P3', {interactive: true, sticky: true});

    L.polyline([[40.415074, -79.879265],[40.415244, -79.878731]], {color: 'red', weight: 5}).addTo(map).bindTooltip('P1, P3', {interactive: true, sticky: true});

    L.polyline([[40.484259, -80.035691],[40.485984, -80.036456],[40.486365, -80.036609],[40.487061, -80.037399],[40.487332, -80.039025],[40.487928, -80.042250],[40.488570, -80.043445],[40.487405, -80.044959],[40.489803, -80.047567]], {color: 'red', weight: 5}).addTo(map).bindTooltip('16', {interactive: true, sticky: true});

    L.polyline([[40.395117, -79.986906],[40.394284, -79.986508],[40.393271, -79.986650],[40.391375, -79.986767]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.438930, -79.992600],[40.439886, -79.994126],[40.440415, -79.994726],[40.441437, -79.997587],[40.442105, -79.999332],[40.442147, -80.001231]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B, 61C, 61D, 71A<br>71B, 71C, 71D', {interactive: true, sticky: true});

    L.polyline([[40.433806, -79.923028],[40.432441, -79.923257],[40.429929, -79.923588]], {color: 'red', weight: 5}).addTo(map).bindTooltip('58, 61C, 61D, 64, 93', {interactive: true, sticky: true});

    L.polyline([[40.414144, -79.923064],[40.415419, -79.924729]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61C, 61D, 64', {interactive: true, sticky: true});

    L.polyline([[40.469941, -79.927191],[40.468919, -79.927627],[40.467924, -79.928206],[40.466767, -79.928936],[40.465773, -79.929513],[40.464718, -79.930136],[40.463247, -79.930903]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 87', {interactive: true, sticky: true});

    L.polyline([[40.421606, -79.979366],[40.423675, -79.977626],[40.424802, -79.979421],[40.425980, -79.980753],[40.427760, -79.980592],[40.428487, -79.980435]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51, 54', {interactive: true, sticky: true});

    L.polyline([[40.441173, -79.891071],[40.441895, -79.892333],[40.443237, -79.892350],[40.444056, -79.892056],[40.445738, -79.891336],[40.446020, -79.891613]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C', {interactive: true, sticky: true});

    L.polyline([[40.462804, -79.929214],[40.462140, -79.927031],[40.461706, -79.925955]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C, 77, 88', {interactive: true, sticky: true});

    L.polyline([[40.495146, -80.054878],[40.494241, -80.053020],[40.493522, -80.051607],[40.492377, -80.049279],[40.491015, -80.048154]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 16', {interactive: true, sticky: true});

    L.polyline([[40.455277, -80.006735],[40.454569, -80.006480],[40.453707, -80.007756],[40.450455, -80.007210],[40.450324, -80.004021],[40.449939, -80.001169]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 16', {interactive: true, sticky: true});

    L.polyline([[40.444537, -79.942539],[40.443785, -79.938967],[40.442722, -79.937873],[40.440570, -79.935813],[40.438946, -79.934353],[40.437910, -79.933397],[40.437676, -79.931065],[40.437905, -79.927877],[40.437959, -79.923192]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B, 61C, 61D', {interactive: true, sticky: true});

    L.polyline([[40.467215, -80.025171],[40.464408, -80.023769],[40.463797, -80.022953],[40.463312, -80.022136],[40.462883, -80.020603],[40.461477, -80.019064],[40.460243, -80.018247],[40.459483, -80.016973]], {color: 'red', weight: 5}).addTo(map).bindTooltip('16', {interactive: true, sticky: true});

    L.polyline([[40.489075, -80.046972],[40.487344, -80.044775],[40.488414, -80.043634],[40.487885, -80.042613],[40.487682, -80.041149],[40.487208, -80.039275],[40.486998, -80.037977],[40.486466, -80.036883],[40.484428, -80.035989],[40.483108, -80.035576],[40.481758, -80.034192],[40.481049, -80.032970],[40.479733, -80.031255],[40.478360, -80.031279],[40.476578, -80.031815],[40.475415, -80.030620],[40.473769, -80.029011],[40.471728, -80.027139],[40.470755, -80.025959],[40.470000, -80.025739],[40.468391, -80.025324]], {color: 'red', weight: 5}).addTo(map).bindTooltip('16', {interactive: true, sticky: true});

    L.polyline([[40.447427, -79.949133],[40.449579, -79.950528],[40.451805, -79.951963]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 71A, 71C, 93', {interactive: true, sticky: true});

    L.polyline([[40.427900, -79.980749],[40.425059, -79.980957],[40.424695, -79.979513],[40.423981, -79.977811],[40.421756, -79.979334],[40.421179, -79.980466],[40.421477, -79.982473],[40.421656, -79.984374],[40.420842, -79.985850],[40.419775, -79.987439],[40.417919, -79.986459],[40.416431, -79.987013],[40.415486, -79.987436]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51, 54', {interactive: true, sticky: true});

    L.polyline([[40.476189, -79.920825],[40.475697, -79.919993],[40.475150, -79.918530],[40.473776, -79.919287],[40.472568, -79.919832],[40.471228, -79.920459],[40.469808, -79.921100],[40.468041, -79.921893],[40.466254, -79.922734],[40.465396, -79.923150],[40.464790, -79.923422],[40.462542, -79.924438],[40.460585, -79.925077],[40.458708, -79.925206],[40.457396, -79.925279],[40.455029, -79.925393],[40.454201, -79.925453],[40.453328, -79.924919],[40.451955, -79.924121],[40.451317, -79.925679]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71B', {interactive: true, sticky: true});

    L.polyline([[40.440027, -79.998816],[40.438923, -79.995749],[40.437939, -79.993457],[40.437862, -79.991356],[40.437697, -79.988717],[40.437594, -79.986792],[40.437538, -79.985319],[40.437430, -79.982857],[40.437373, -79.981704],[40.437271, -79.979707]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B, 61C, 61D, 71A<br>71B, 71C, 71D', {interactive: true, sticky: true});

    L.polyline([[40.439746, -79.898088],[40.438108, -79.912884],[40.438096, -79.916020],[40.438090, -79.918176],[40.438123, -79.923613]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B', {interactive: true, sticky: true});

    L.polyline([[40.442796, -79.887008],[40.443822, -79.885930],[40.444486, -79.884597],[40.445919, -79.883363],[40.446994, -79.883475],[40.448036, -79.883725],[40.448845, -79.883931],[40.449163, -79.884022],[40.449814, -79.884176],[40.450913, -79.884457],[40.451646, -79.884637]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71D, 86', {interactive: true, sticky: true});

    L.polyline([[40.429929, -79.923588],[40.428161, -79.925098],[40.427422, -79.926416],[40.426415, -79.927628],[40.425064, -79.928157],[40.423348, -79.928751],[40.422048, -79.928997],[40.419809, -79.928387]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61C, 61D, 64, 93', {interactive: true, sticky: true});

    L.polyline([[40.391151, -79.986553],[40.393108, -79.986496],[40.394398, -79.986369],[40.395066, -79.986704]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.415486, -79.987436],[40.414190, -79.988276],[40.412102, -79.989714],[40.410791, -79.990284]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.368163, -80.030239],[40.369976, -80.033224],[40.375403, -80.038466],[40.382342, -80.043263],[40.391612, -80.040771],[40.397242, -80.036363]], {color: 'red', weight: 5}).addTo(map).bindTooltip('RED, SPCL', {interactive: true, sticky: true});

    L.polyline([[40.438123, -79.923613],[40.438119, -79.927500],[40.437938, -79.930575],[40.438994, -79.934178],[40.440461, -79.935451],[40.442693, -79.937514],[40.443774, -79.938604],[40.444672, -79.943553]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B, 61C, 61D', {interactive: true, sticky: true});

    L.polyline([[40.442989, -79.994171],[40.443763, -79.992218],[40.459324, -79.966245],[40.456656, -79.932410]], {color: 'red', weight: 5}).addTo(map).bindTooltip('P1', {interactive: true, sticky: true});

    L.polyline([[40.344929, -79.961140],[40.342275, -79.966189],[40.342988, -79.968582]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.397303, -80.036426],[40.391647, -80.041033],[40.382183, -80.043282],[40.375329, -80.038533],[40.369833, -80.033392],[40.368110, -80.030167],[40.365736, -80.027147]], {color: 'red', weight: 5}).addTo(map).bindTooltip('RED, SPCL', {interactive: true, sticky: true});

    L.polyline([[40.452463, -79.949829],[40.453134, -79.947424],[40.454039, -79.944537],[40.454893, -79.941586],[40.455373, -79.939823],[40.455808, -79.938657],[40.456443, -79.936528]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71C, 82', {interactive: true, sticky: true});

    L.polyline([[40.401028, -79.989213],[40.402155, -79.989361],[40.403797, -79.990073],[40.405449, -79.990979],[40.407207, -79.991794],[40.408570, -79.991114]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.415244, -79.878731],[40.419173, -79.886408],[40.437518, -79.885844],[40.446426, -79.888392]], {color: 'red', weight: 5}).addTo(map).bindTooltip('P1, P3', {interactive: true, sticky: true});

    L.polyline([[40.451516, -79.951933],[40.449852, -79.950985],[40.447063, -79.949159]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 71A, 71C, 93', {interactive: true, sticky: true});

    L.polyline([[40.446795, -79.949505],[40.446993, -79.947425],[40.447089, -79.945377],[40.447283, -79.942673]], {color: 'red', weight: 5}).addTo(map).bindTooltip('28X, 58, 71B, 71D', {interactive: true, sticky: true});

    L.polyline([[40.450919, -79.884618],[40.449285, -79.884244],[40.448021, -79.883911],[40.447203, -79.883718],[40.446193, -79.883477],[40.444634, -79.884432]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71D, 86', {interactive: true, sticky: true});

    L.polyline([[40.431748, -80.003295],[40.430033, -79.999146],[40.429408, -79.997226],[40.428650, -79.995104],[40.428506, -79.993629],[40.428545, -79.992141],[40.428572, -79.991145],[40.428587, -79.989917],[40.428617, -79.988692],[40.428653, -79.986520],[40.428668, -79.985428],[40.428703, -79.984214],[40.428726, -79.983508],[40.428740, -79.982138],[40.428667, -79.980653]], {color: 'red', weight: 5}).addTo(map).bindTooltip('48, 51', {interactive: true, sticky: true});

    L.polyline([[40.442796, -79.887008],[40.441734, -79.887238]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C', {interactive: true, sticky: true});

    L.polyline([[40.437959, -79.923192],[40.437936, -79.919571],[40.437937, -79.917844],[40.437960, -79.916337],[40.437901, -79.913265],[40.439494, -79.899344]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B', {interactive: true, sticky: true});

    L.polyline([[40.396673, -79.987820],[40.395117, -79.986906]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.450791, -79.905960],[40.451494, -79.908044],[40.452615, -79.910239],[40.453901, -79.912089],[40.455964, -79.915042]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C', {interactive: true, sticky: true});

    L.polyline([[40.451087, -79.925842],[40.452104, -79.924006],[40.453221, -79.924667],[40.454105, -79.925206],[40.455045, -79.925214],[40.457029, -79.925101],[40.458701, -79.925026],[40.460336, -79.924902],[40.461266, -79.924804],[40.463580, -79.923764],[40.464826, -79.923192],[40.465718, -79.922771],[40.467972, -79.921761]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71B', {interactive: true, sticky: true});

    L.polyline([[40.380732, -79.975841],[40.382749, -79.976765],[40.384065, -79.977563],[40.385732, -79.978757],[40.386881, -79.981867],[40.388079, -79.984632],[40.389215, -79.985351]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.428861, -79.981969],[40.428838, -79.984077],[40.428808, -79.985260],[40.428781, -79.986356],[40.428777, -79.987399],[40.428720, -79.989711],[40.428696, -79.990949],[40.428654, -79.992185],[40.428620, -79.993513],[40.428752, -79.994950],[40.429495, -79.997145],[40.430104, -79.998976],[40.430933, -80.001171],[40.431826, -80.003252]], {color: 'red', weight: 5}).addTo(map).bindTooltip('48, 51', {interactive: true, sticky: true});

    L.polyline([[40.437055, -79.971135],[40.436766, -79.970267],[40.436341, -79.968608],[40.437411, -79.965357],[40.437698, -79.964185]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 71A, 71B, 71C, 71D<br>75', {interactive: true, sticky: true});

    L.polyline([[40.456443, -79.936528],[40.457023, -79.934549]], {color: 'red', weight: 5}).addTo(map).bindTooltip('64, 71A, 71C, 82, 86', {interactive: true, sticky: true});

    L.polyline([[40.437175, -79.970989],[40.437895, -79.973003],[40.438097, -79.974410],[40.438199, -79.975867],[40.438258, -79.977353],[40.438340, -79.979468],[40.438399, -79.980575],[40.438504, -79.982631],[40.438585, -79.984902],[40.438652, -79.986317],[40.438709, -79.988102],[40.438844, -79.990723],[40.438930, -79.992600]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B, 61C, 61D, 67<br>71A, 71B, 71C, 71D', {interactive: true, sticky: true});

    L.polyline([[40.503160, -80.072884],[40.502443, -80.071168],[40.501811, -80.069499],[40.501030, -80.067617],[40.500138, -80.066060],[40.499613, -80.064807],[40.499159, -80.063652],[40.498525, -80.062027],[40.497597, -80.059944],[40.496830, -80.058330],[40.496361, -80.057408],[40.495146, -80.054878]], {color: 'red', weight: 5}).addTo(map).bindTooltip('16', {interactive: true, sticky: true});

    L.polyline([[40.441999, -80.001761],[40.443906, -80.002613],[40.447436, -80.003898]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 15, 16, 17', {interactive: true, sticky: true});

    L.polyline([[40.386763, -79.982040],[40.385784, -79.979049],[40.384479, -79.978040],[40.382843, -79.977001],[40.381290, -79.976278],[40.380704, -79.976021]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.458229, -79.918334],[40.459536, -79.920258],[40.460269, -79.921621],[40.461007, -79.923521],[40.461424, -79.924611]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C, 74, 82, 86, 88<br>89', {interactive: true, sticky: true});

    L.polyline([[40.449027, -79.985377],[40.451124, -79.982231],[40.453285, -79.979096],[40.454201, -79.977772],[40.455192, -79.976335],[40.456441, -79.974604],[40.457114, -79.973582],[40.458094, -79.972113],[40.459076, -79.970701]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 86, 87, 88, 91', {interactive: true, sticky: true});

    L.polyline([[40.462057, -79.931700],[40.460837, -79.932492],[40.458664, -79.933723],[40.457303, -79.934152],[40.456575, -79.936433]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71C', {interactive: true, sticky: true});

    L.polyline([[40.456976, -80.015553],[40.459641, -80.016938],[40.461454, -80.018800],[40.461913, -80.019148],[40.463040, -80.020510],[40.463357, -80.021825],[40.463759, -80.022532],[40.464496, -80.023565],[40.465504, -80.024572],[40.466826, -80.024895],[40.468309, -80.025110],[40.469892, -80.025494],[40.470841, -80.025755],[40.471819, -80.026968],[40.473456, -80.028530],[40.475462, -80.030393],[40.476386, -80.031563],[40.478133, -80.031186],[40.479707, -80.031015],[40.480782, -80.032229],[40.481241, -80.033026],[40.481664, -80.033736],[40.482083, -80.034453],[40.482952, -80.035299]], {color: 'red', weight: 5}).addTo(map).bindTooltip('16', {interactive: true, sticky: true});

    L.polyline([[40.456006, -79.938350],[40.455637, -79.939957],[40.455080, -79.941436],[40.454188, -79.944426],[40.453359, -79.947182],[40.452626, -79.949598]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71C, 82', {interactive: true, sticky: true});

    L.polyline([[40.447283, -79.942673],[40.447534, -79.939104],[40.447738, -79.936970],[40.448263, -79.934173],[40.448788, -79.932562],[40.449721, -79.929700],[40.450432, -79.927451]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71B, 71D', {interactive: true, sticky: true});

    L.polyline([[40.420484, -79.986253],[40.421301, -79.984611],[40.421381, -79.982566],[40.421091, -79.980267],[40.421606, -79.979366]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.476189, -79.920825],[40.476428, -79.921587],[40.477245, -79.923510],[40.475643, -79.924655],[40.474184, -79.925274],[40.472657, -79.925977],[40.471724, -79.926416],[40.469941, -79.927191]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A', {interactive: true, sticky: true});

    L.polyline([[40.491015, -80.048154],[40.489075, -80.046972]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 16', {interactive: true, sticky: true});

    L.polyline([[40.437698, -79.964185],[40.438955, -79.962128],[40.440634, -79.959848],[40.441102, -79.959195],[40.442077, -79.957855],[40.443079, -79.956461],[40.444299, -79.954840]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 71A, 71B, 71C, 71D<br>75, 93, P3', {interactive: true, sticky: true});

    L.polyline([[40.437068, -79.923078],[40.436084, -79.923053],[40.434857, -79.922979],[40.433806, -79.923028]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61C, 61D, 64', {interactive: true, sticky: true});

    L.polyline([[40.446426, -79.888392],[40.452978, -79.899254]], {color: 'red', weight: 5}).addTo(map).bindTooltip('P1, P3', {interactive: true, sticky: true});

    L.polyline([[40.443148, -79.996759],[40.443514, -79.995292]], {color: 'red', weight: 5}).addTo(map).bindTooltip('1, 6, 15, 39, 40<br>44, 86, 88, 91, G2', {interactive: true, sticky: true});

    L.polyline([[40.420842, -80.006995],[40.416484, -80.011950],[40.413385, -80.011017],[40.411366, -80.014241],[40.409729, -80.017743],[40.411247, -80.023499],[40.411047, -80.024553],[40.407245, -80.026906]], {color: 'red', weight: 5}).addTo(map).bindTooltip('RED', {interactive: true, sticky: true});

    L.polyline([[40.407245, -80.026906],[40.404091, -80.030307]], {color: 'red', weight: 5}).addTo(map).bindTooltip('RED, RED2', {interactive: true, sticky: true});

    L.polyline([[40.389279, -79.985559],[40.388087, -79.984852],[40.387283, -79.983978]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.457023, -79.934549],[40.458244, -79.933833],[40.460442, -79.932349]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71C', {interactive: true, sticky: true});

    L.polyline([[40.451646, -79.884637],[40.452043, -79.886046],[40.452376, -79.887406],[40.452717, -79.888960],[40.453201, -79.890958],[40.453629, -79.892856],[40.454161, -79.895076],[40.454637, -79.897335],[40.455145, -79.899486],[40.455724, -79.902067],[40.456300, -79.904636],[40.456731, -79.906504],[40.457223, -79.908592],[40.455534, -79.910929],[40.453983, -79.913074],[40.453713, -79.915229],[40.452952, -79.920671],[40.451996, -79.923883]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71D', {interactive: true, sticky: true});

    L.polyline([[40.452814, -79.920807],[40.453480, -79.915595],[40.453830, -79.913221],[40.454729, -79.911486],[40.455609, -79.910532],[40.457096, -79.908678],[40.456674, -79.906986],[40.456222, -79.904949],[40.455647, -79.902337],[40.455079, -79.899786],[40.454590, -79.897748],[40.454033, -79.895300],[40.453554, -79.893105],[40.453133, -79.891266],[40.452679, -79.889391],[40.452296, -79.887700],[40.452033, -79.886405],[40.451639, -79.884935],[40.450919, -79.884618]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71D', {interactive: true, sticky: true});

    L.polyline([[40.493965, -80.052246],[40.494642, -80.053541],[40.495581, -80.055447],[40.496395, -80.057113],[40.496844, -80.057996],[40.497795, -80.060019],[40.498574, -80.061730],[40.499371, -80.063642],[40.499647, -80.064384],[40.500070, -80.065432],[40.500920, -80.067015],[40.501785, -80.068892],[40.502597, -80.071073],[40.503381, -80.072855]], {color: 'red', weight: 5}).addTo(map).bindTooltip('16', {interactive: true, sticky: true});

    L.polyline([[40.420949, -80.001572],[40.420948, -80.000652],[40.421001, -79.999111]], {color: 'red', weight: 5}).addTo(map).bindTooltip('44, 48', {interactive: true, sticky: true});

    L.polyline([[40.360920, -80.029172],[40.365524, -80.025970],[40.366387, -80.016041],[40.374028, -80.007532],[40.377990, -80.004197],[40.392713, -79.998087],[40.398364, -79.998536],[40.409018, -80.003438],[40.416491, -80.010140],[40.420800, -80.006913]], {color: 'red', weight: 5}).addTo(map).bindTooltip('BLLB, BLSV', {interactive: true, sticky: true});

    L.polyline([[40.455164, -80.015080],[40.453943, -80.013872],[40.454174, -80.012659],[40.454571, -80.010589],[40.454931, -80.008722],[40.455277, -80.006735]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 15, 16, 17', {interactive: true, sticky: true});

    L.polyline([[40.410683, -80.024547],[40.411009, -80.023503],[40.409619, -80.017638],[40.411182, -80.014222],[40.413398, -80.010940],[40.416553, -80.011825],[40.420800, -80.006913]], {color: 'red', weight: 5}).addTo(map).bindTooltip('RED', {interactive: true, sticky: true});

    L.polyline([[40.402466, -79.868611],[40.402233, -79.867405]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B', {interactive: true, sticky: true});

    L.polyline([[40.380704, -79.976021],[40.379410, -79.975635],[40.377845, -79.975531],[40.376559, -79.975565],[40.375008, -79.975651],[40.372957, -79.975575],[40.371597, -79.975401],[40.370531, -79.975282],[40.369061, -79.975794],[40.368455, -79.976789],[40.367504, -79.978661],[40.366644, -79.981058]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.451996, -79.923883],[40.451317, -79.925679]], {color: 'red', weight: 5}).addTo(map).bindTooltip('64, 71D', {interactive: true, sticky: true});

    L.polyline([[40.418719, -79.986243],[40.419629, -79.987451],[40.420484, -79.986253]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51, 54', {interactive: true, sticky: true});

    L.polyline([[40.403708, -79.919836],[40.407612, -79.918645],[40.409344, -79.916405]], {color: 'red', weight: 5}).addTo(map).bindTooltip('59, 61D, 61D, 64, 64', {interactive: true, sticky: true});

    L.polyline([[40.443261, -79.956444],[40.441802, -79.958488],[40.439525, -79.961689]], {color: 'red', weight: 5}).addTo(map).bindTooltip('28X, 54, 61A, 61B, 61C<br>61D, 67, 71A, 71B, 71C<br>71D, 75', {interactive: true, sticky: true});

    L.polyline([[40.442509, -79.884368],[40.441923, -79.882645],[40.441482, -79.881354],[40.441056, -79.880086]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 67, 69, 78, 79', {interactive: true, sticky: true});

    L.polyline([[40.459483, -80.016973],[40.457747, -80.016002],[40.456816, -80.015690],[40.456160, -80.015463],[40.455164, -80.015080]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 15, 16', {interactive: true, sticky: true});

    L.polyline([[40.437035, -80.001631],[40.439008, -80.001404],[40.440352, -80.000557],[40.441825, -79.999527]], {color: 'red', weight: 5}).addTo(map).bindTooltip('39, 40, 41, 43, 44<br>48, 51, Y46, Y47, Y49', {interactive: true, sticky: true});

    L.polyline([[40.443918, -79.992138],[40.443609, -79.995638]], {color: 'red', weight: 5}).addTo(map).bindTooltip('39, 40, 44, P1', {interactive: true, sticky: true});

    L.polyline([[40.450614, -79.927359],[40.449884, -79.929590],[40.449028, -79.932476],[40.448529, -79.934107],[40.447846, -79.937050],[40.447751, -79.938742],[40.447468, -79.942352],[40.447164, -79.947203],[40.447078, -79.948856]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71B, 71D', {interactive: true, sticky: true});

    L.polyline([[40.363005, -79.930590],[40.360814, -79.933145]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.397242, -80.036363],[40.399517, -80.033554],[40.404056, -80.030102]], {color: 'red', weight: 5}).addTo(map).bindTooltip('RED', {interactive: true, sticky: true});

    L.polyline([[40.446257, -79.888290],[40.449838, -79.891678]], {color: 'red', weight: 5}).addTo(map).bindTooltip('68, 69, 71, 71C, 71D<br>78, 79, 86', {interactive: true, sticky: true});

    L.polyline([[40.401139, -79.989385],[40.399834, -79.989208]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.439537, -79.999106],[40.438311, -79.999930],[40.436880, -80.000923]], {color: 'red', weight: 5}).addTo(map).bindTooltip('39, 40, 41, 43, 44<br>48, 51, Y46, Y47, Y49', {interactive: true, sticky: true});

    L.polyline([[40.455964, -79.915042],[40.457459, -79.917296],[40.458229, -79.918334]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C, 88', {interactive: true, sticky: true});

    L.polyline([[40.424861, -79.928042],[40.426316, -79.927482],[40.427685, -79.925868],[40.428177, -79.924745],[40.429580, -79.923410],[40.432209, -79.923060],[40.433478, -79.922886],[40.434623, -79.922725]], {color: 'red', weight: 5}).addTo(map).bindTooltip('58, 61C, 61D, 64, 93', {interactive: true, sticky: true});

    L.polyline([[40.446128, -79.888401],[40.437444, -79.885869],[40.418917, -79.886273],[40.415244, -79.878731]], {color: 'red', weight: 5}).addTo(map).bindTooltip('P1, P3', {interactive: true, sticky: true});

    L.polyline([[40.444082, -79.993358],[40.446689, -79.989230],[40.449027, -79.985377]], {color: 'red', weight: 5}).addTo(map).bindTooltip('86, 87, 88, 91', {interactive: true, sticky: true});

    L.polyline([[40.449795, -80.004631],[40.454064, -80.004065],[40.454703, -80.006318],[40.455368, -80.007505]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 16', {interactive: true, sticky: true});

    L.polyline([[40.420800, -80.006913],[40.431597, -80.003189],[40.435234, -79.996668],[40.439794, -79.995653],[40.442355, -79.999515],[40.441701, -80.004132],[40.447495, -80.008946],[40.447801, -80.018340]], {color: 'red', weight: 5}).addTo(map).bindTooltip('BLLB, BLSV, RED', {interactive: true, sticky: true});

    L.polyline([[40.441550, -79.997761],[40.441163, -79.995491]], {color: 'red', weight: 5}).addTo(map).bindTooltip('87, P1', {interactive: true, sticky: true});

    L.polyline([[40.443271, -79.886907],[40.446257, -79.888290]], {color: 'red', weight: 5}).addTo(map).bindTooltip('68, 71C, 71D, 78, 79<br>86', {interactive: true, sticky: true});

    L.polyline([[40.437271, -79.979707],[40.437207, -79.977887],[40.437125, -79.976152],[40.437063, -79.974731],[40.437264, -79.962711]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B, 61C, 61D', {interactive: true, sticky: true});

    L.polyline([[40.353591, -80.027940],[40.356946, -80.028993],[40.360920, -80.029172]], {color: 'red', weight: 5}).addTo(map).bindTooltip('BLLB, BLSV, SPCL', {interactive: true, sticky: true});

    L.polyline([[40.440785, -80.000814],[40.440027, -79.998816]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B, 61C, 61D, 71A<br>71B, 71C, 71D', {interactive: true, sticky: true});

    L.polyline([[40.441630, -80.021797],[40.439844, -80.017574]], {color: 'red', weight: 5}).addTo(map).bindTooltip('20, 21, 22, 24, 26<br>27, 28X, 29, 31, G2', {interactive: true, sticky: true});

    L.polyline([[40.443609, -79.995638],[40.441550, -79.997761]], {color: 'red', weight: 5}).addTo(map).bindTooltip('39, 40, 44, 87, P1', {interactive: true, sticky: true});

    L.polyline([[40.437271, -79.979707],[40.437638, -79.977542],[40.438022, -79.976035],[40.437902, -79.974559],[40.437690, -79.973041],[40.437055, -79.971135]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71B, 71C, 71D', {interactive: true, sticky: true});

    L.polyline([[40.443298, -80.000402],[40.441999, -80.001761]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 16, 17', {interactive: true, sticky: true});

    L.polyline([[40.463215, -79.930728],[40.464534, -79.929952],[40.465494, -79.929427],[40.466464, -79.928819],[40.467388, -79.928150],[40.468675, -79.927372],[40.469537, -79.926983],[40.471290, -79.926233]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 87', {interactive: true, sticky: true});

    L.polyline([[40.442235, -80.000239],[40.442812, -79.998058]], {color: 'red', weight: 5}).addTo(map).bindTooltip('29, 31, 81, 82, 83<br>G2', {interactive: true, sticky: true});

    L.polyline([[40.467972, -79.921761],[40.469547, -79.921006]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71B, 75', {interactive: true, sticky: true});

    L.polyline([[40.461920, -79.931460],[40.463215, -79.930728]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71C, 77, 87', {interactive: true, sticky: true});

    L.polyline([[40.439525, -79.961689],[40.437916, -79.963899]], {color: 'red', weight: 5}).addTo(map).bindTooltip('28X, 54, 61A, 61B, 61C<br>61D, 67, 71A, 71B, 71C<br>71D, 75, 81, 83, P3', {interactive: true, sticky: true});

    L.polyline([[40.461706, -79.925955],[40.461386, -79.925062],[40.461062, -79.923987],[40.460259, -79.921843],[40.459171, -79.920112]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C, 74, 77, 82, 86<br>88, 89', {interactive: true, sticky: true});

    L.polyline([[40.391375, -79.986767],[40.389279, -79.985559]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.419836, -79.928149],[40.421796, -79.928735],[40.423081, -79.928655],[40.424861, -79.928042]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61C, 61D, 64, 93', {interactive: true, sticky: true});

    L.polyline([[40.366644, -79.981058],[40.365537, -79.982479],[40.361377, -79.982776]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.469547, -79.921006],[40.470998, -79.920331],[40.472356, -79.919711],[40.473327, -79.919255],[40.474394, -79.918757],[40.475734, -79.919688],[40.477040, -79.918917]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71B', {interactive: true, sticky: true});

    L.polyline([[40.431371, -80.006097],[40.432559, -80.004904]], {color: 'red', weight: 5}).addTo(map).bindTooltip('MI', {interactive: true, sticky: true});

    L.polyline([[40.456634, -79.932696],[40.459333, -79.966598],[40.443918, -79.992138]], {color: 'red', weight: 5}).addTo(map).bindTooltip('P1', {interactive: true, sticky: true});

    L.polyline([[40.341259, -79.944847],[40.344197, -79.947187]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51, 55, 59, Y47, Y49', {interactive: true, sticky: true});

    L.polyline([[40.458136, -79.918523],[40.457230, -79.917270],[40.455961, -79.915406]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C, 88', {interactive: true, sticky: true});

    L.polyline([[40.437264, -79.962711],[40.438289, -79.961275],[40.439635, -79.959442]], {color: 'red', weight: 5}).addTo(map).bindTooltip('28X, 61A, 61B, 61C, 61D<br>67, 81, 83', {interactive: true, sticky: true});

    L.polyline([[40.410791, -79.990284],[40.408819, -79.991186]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.444672, -79.943553],[40.444609, -79.945908],[40.444547, -79.948475],[40.444159, -79.950081],[40.445676, -79.953221]], {color: 'red', weight: 5}).addTo(map).bindTooltip('28X, 58, 61A, 61B, 61C<br>61D, 67', {interactive: true, sticky: true});

    L.polyline([[40.489803, -80.047567],[40.491655, -80.047859],[40.492464, -80.049270]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 16', {interactive: true, sticky: true});

    L.polyline([[40.441514, -79.998137],[40.439537, -79.999106]], {color: 'red', weight: 5}).addTo(map).bindTooltip('41, 43, 48, 51, Y46<br>Y47, Y49', {interactive: true, sticky: true});

    L.polyline([[40.436880, -80.000923],[40.431748, -80.003295]], {color: 'red', weight: 5}).addTo(map).bindTooltip('43, 48, 51', {interactive: true, sticky: true});

    L.polyline([[40.439635, -79.959442],[40.440939, -79.957623],[40.442062, -79.956097],[40.443052, -79.953663]], {color: 'red', weight: 5}).addTo(map).bindTooltip('28X, 58, 61A, 61B, 61C<br>61D, 67', {interactive: true, sticky: true});

    L.polyline([[40.448364, -79.986760],[40.446914, -79.989193],[40.445339, -79.991791]], {color: 'red', weight: 5}).addTo(map).bindTooltip('86, 87, 88, 91', {interactive: true, sticky: true});

    L.polyline([[40.443052, -79.953663],[40.443666, -79.951295],[40.444379, -79.948873],[40.444498, -79.945786],[40.444537, -79.942539]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B, 61C, 61D, 67', {interactive: true, sticky: true});

    L.polyline([[40.438510, -80.019468],[40.440126, -80.018026]], {color: 'red', weight: 5}).addTo(map).bindTooltip('DQI', {interactive: true, sticky: true});

    L.polyline([[40.451087, -79.925842],[40.451835, -79.924005],[40.452814, -79.920807]], {color: 'red', weight: 5}).addTo(map).bindTooltip('64, 71D', {interactive: true, sticky: true});

    L.polyline([[40.413210, -79.988772],[40.416000, -79.987070],[40.418719, -79.986243]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.447801, -80.018340],[40.447494, -80.009029],[40.441680, -80.004245],[40.442286, -79.999569],[40.439902, -79.995778],[40.435298, -79.996751],[40.431650, -80.003158],[40.420842, -80.006995]], {color: 'red', weight: 5}).addTo(map).bindTooltip('BLLB, BLSV, RED', {interactive: true, sticky: true});

    L.polyline([[40.439967, -80.017381],[40.441717, -80.021358]], {color: 'red', weight: 5}).addTo(map).bindTooltip('20, 21, 22, 24, 26<br>27, 28X, 29, 31, G2', {interactive: true, sticky: true});

    L.polyline([[40.441163, -79.995491],[40.442989, -79.994171]], {color: 'red', weight: 5}).addTo(map).bindTooltip('87, P1', {interactive: true, sticky: true});

    L.polyline([[40.404091, -80.030307],[40.399576, -80.033559],[40.397303, -80.036426]], {color: 'red', weight: 5}).addTo(map).bindTooltip('RED', {interactive: true, sticky: true});

    L.polyline([[40.446296, -79.952021],[40.446795, -79.949505]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71B, 71D, 75, P3', {interactive: true, sticky: true});

    L.polyline([[40.449838, -79.891678],[40.446386, -79.888546]], {color: 'red', weight: 5}).addTo(map).bindTooltip('68, 69, 71, 71C, 71D<br>78, 79, 86', {interactive: true, sticky: true});

    L.polyline([[40.445676, -79.953221],[40.444618, -79.954707],[40.443261, -79.956444]], {color: 'red', weight: 5}).addTo(map).bindTooltip('28X, 54, 58, 61A, 61B<br>61C, 61D, 67, 71A, 71B<br>71C, 71D, 75, 93, P3', {interactive: true, sticky: true});

    L.polyline([[40.428487, -79.980435],[40.428861, -79.981969]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.404056, -80.030102],[40.407086, -80.026804],[40.410683, -80.024547]], {color: 'red', weight: 5}).addTo(map).bindTooltip('RED, RED2', {interactive: true, sticky: true});

    L.polyline([[40.446386, -79.888546],[40.442796, -79.887008]], {color: 'red', weight: 5}).addTo(map).bindTooltip('68, 69, 71, 71C, 71D<br>78, 79, 86', {interactive: true, sticky: true});

    L.polyline([[40.446296, -79.952021],[40.447427, -79.949133]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71C, 93', {interactive: true, sticky: true});

    L.polyline([[40.441825, -79.999527],[40.441514, -79.998137]], {color: 'red', weight: 5}).addTo(map).bindTooltip('41, 43, 48, 51, Y46<br>Y47, Y49', {interactive: true, sticky: true});

    L.polyline([[40.444387, -79.885858],[40.443271, -79.886907]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71D, 78, 79, 86', {interactive: true, sticky: true});

    L.polyline([[40.450432, -79.927451],[40.451087, -79.925842]], {color: 'red', weight: 5}).addTo(map).bindTooltip('64, 71B, 71D', {interactive: true, sticky: true});

    L.polyline([[40.452115, -79.950948],[40.452463, -79.949829]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 71A, 71C, 82', {interactive: true, sticky: true});

    L.polyline([[40.454085, -80.014325],[40.455801, -80.015159],[40.456976, -80.015553]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 15, 16', {interactive: true, sticky: true});

    L.polyline([[40.408819, -79.991186],[40.407123, -79.992066],[40.405086, -79.990860],[40.403883, -79.990282],[40.402178, -79.989526],[40.401139, -79.989385]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.444299, -79.954840],[40.445488, -79.953131],[40.446296, -79.952021]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71B, 71C, 71D, 75<br>93, P3', {interactive: true, sticky: true});

    L.polyline([[40.446020, -79.891613],[40.446662, -79.893535],[40.447161, -79.894938],[40.448181, -79.898109],[40.448673, -79.899502],[40.449177, -79.901118],[40.450023, -79.903534],[40.450791, -79.905960]], {color: 'red', weight: 5}).addTo(map).bindTooltip('67, 71C', {interactive: true, sticky: true});

    L.polyline([[40.410466, -79.990269],[40.413210, -79.988772]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51, 54', {interactive: true, sticky: true});

    L.polyline([[40.437916, -79.963899],[40.437655, -79.965223]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 61A, 61B, 61C, 61D<br>67, 71A, 71B, 71C, 71D<br>75, 81, 83, P3', {interactive: true, sticky: true});

    L.polyline([[40.457675, -79.911891],[40.459374, -79.923171],[40.456634, -79.932696]], {color: 'red', weight: 5}).addTo(map).bindTooltip('P1, P3', {interactive: true, sticky: true});

    L.polyline([[40.399834, -79.989208],[40.398285, -79.988714],[40.396673, -79.987820]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.492464, -80.049270],[40.493124, -80.050484],[40.493965, -80.052246]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 16', {interactive: true, sticky: true});

    L.polyline([[40.479203, -79.919051],[40.477702, -79.919938],[40.476189, -79.920825]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71B', {interactive: true, sticky: true});

    L.polyline([[40.415465, -79.925076],[40.413878, -79.923117]], {color: 'red', weight: 5}).addTo(map).bindTooltip('53L, 61C, 61D, 64', {interactive: true, sticky: true});

    L.polyline([[40.440504, -79.887680],[40.440465, -79.889367],[40.441173, -79.891071]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 71, 71C', {interactive: true, sticky: true});

    L.polyline([[40.478980, -79.917783],[40.479479, -79.918680],[40.479655, -79.922166]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71B', {interactive: true, sticky: true});

    L.polyline([[40.437655, -79.965223],[40.436479, -79.968584],[40.436903, -79.970166],[40.437175, -79.970989]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 61A, 61B, 61C, 61D<br>67, 71A, 71B, 71C, 71D<br>75, 81, 83', {interactive: true, sticky: true});

    L.polyline([[40.441713, -80.002122],[40.442235, -80.000239]], {color: 'red', weight: 5}).addTo(map).bindTooltip('29, 31, 81, 82, 83<br>G2', {interactive: true, sticky: true});

    L.polyline([[40.479655, -79.922166],[40.479203, -79.919051]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71B', {interactive: true, sticky: true});

    L.polyline([[40.477040, -79.918917],[40.478980, -79.917783]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71B', {interactive: true, sticky: true});

    L.polyline([[40.432559, -80.004904],[40.431371, -80.006097]], {color: 'red', weight: 5}).addTo(map).bindTooltip('MI', {interactive: true, sticky: true});

    L.polyline([[40.446704, -79.951806],[40.445676, -79.953221]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71B, 71C, 71D, 75<br>93, P3', {interactive: true, sticky: true});

    L.polyline([[40.455368, -80.007505],[40.455174, -80.008537],[40.454803, -80.010515],[40.454427, -80.012519],[40.454085, -80.014325]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 15, 16, 17', {interactive: true, sticky: true});

    L.polyline([[40.415419, -79.924729],[40.419836, -79.928149]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61C, 61D, 64', {interactive: true, sticky: true});

    L.polyline([[40.396613, -79.987607],[40.398126, -79.988463],[40.399742, -79.989030]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.431826, -80.003252],[40.437035, -80.001631]], {color: 'red', weight: 5}).addTo(map).bindTooltip('39, 40, 41, 43, 44<br>48, 51, Y46, Y47, Y49', {interactive: true, sticky: true});

    L.polyline([[40.415244, -79.878731],[40.415074, -79.879265]], {color: 'red', weight: 5}).addTo(map).bindTooltip('P1, P3', {interactive: true, sticky: true});

    L.polyline([[40.453482, -79.979113],[40.451215, -79.982418],[40.449248, -79.985350],[40.448364, -79.986760]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 86, 87, 88, 91', {interactive: true, sticky: true});

    L.polyline([[40.441734, -79.887238],[40.440504, -79.887680]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 71C', {interactive: true, sticky: true});

    L.polyline([[40.441717, -80.021358],[40.444664, -80.028505]], {color: 'red', weight: 5}).addTo(map).bindTooltip('20, 21, 22, 24, 28X<br>G2', {interactive: true, sticky: true});

    L.polyline([[40.448321, -80.000636],[40.443298, -80.000402]], {color: 'red', weight: 5}).addTo(map).bindTooltip('13, 16, 17', {interactive: true, sticky: true});

    L.polyline([[40.460442, -79.932349],[40.461920, -79.931460]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71C, 77', {interactive: true, sticky: true});

    L.polyline([[40.451317, -79.925679],[40.450614, -79.927359]], {color: 'red', weight: 5}).addTo(map).bindTooltip('64, 71B, 71D', {interactive: true, sticky: true});

    L.polyline([[40.440126, -80.018026],[40.438510, -80.019468]], {color: 'red', weight: 5}).addTo(map).bindTooltip('DQI', {interactive: true, sticky: true});

    L.polyline([[40.342060, -79.966768],[40.342510, -79.964580]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.444634, -79.884432],[40.444387, -79.885858]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71D', {interactive: true, sticky: true});

    L.polyline([[40.449939, -80.001169],[40.449026, -80.000873]], {color: 'red', weight: 5}).addTo(map).bindTooltip('1, 2, 6, 8, 12<br>13, 15, 16, 17', {interactive: true, sticky: true});

    L.polyline([[40.434623, -79.922725],[40.436148, -79.922754]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61C, 61D, 64', {interactive: true, sticky: true});

    L.polyline([[40.436148, -79.922754],[40.438123, -79.923613]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61C, 61D', {interactive: true, sticky: true});

    L.polyline([[40.461732, -79.925539],[40.462843, -79.928589]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C, 88', {interactive: true, sticky: true});

    L.polyline([[40.428667, -79.980653],[40.427900, -79.980749]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.387283, -79.983978],[40.386763, -79.982040]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.456575, -79.936433],[40.456006, -79.938350]], {color: 'red', weight: 5}).addTo(map).bindTooltip('64, 71A, 71C, 82, 86', {interactive: true, sticky: true});

    L.polyline([[40.503381, -80.072855],[40.503632, -80.074424]], {color: 'red', weight: 5}).addTo(map).bindTooltip('16', {interactive: true, sticky: true});

    L.polyline([[40.419809, -79.928387],[40.415465, -79.925076]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61C, 61D, 64', {interactive: true, sticky: true});

    L.polyline([[40.468391, -80.025324],[40.467215, -80.025171]], {color: 'red', weight: 5}).addTo(map).bindTooltip('16, 17', {interactive: true, sticky: true});

    L.polyline([[40.461424, -79.924611],[40.461732, -79.925539]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C, 82, 86, 88', {interactive: true, sticky: true});

    L.polyline([[40.482952, -80.035299],[40.484259, -80.035691]], {color: 'red', weight: 5}).addTo(map).bindTooltip('16, 17', {interactive: true, sticky: true});

    L.polyline([[40.462843, -79.928589],[40.463247, -79.930903]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C', {interactive: true, sticky: true});

    L.polyline([[40.347316, -79.952377],[40.359132, -79.933958]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.452978, -79.899254],[40.457675, -79.911891]], {color: 'red', weight: 5}).addTo(map).bindTooltip('P1, P3', {interactive: true, sticky: true});

    L.polyline([[40.451805, -79.951963],[40.452115, -79.950948]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 71A, 71C', {interactive: true, sticky: true});

    L.polyline([[40.363786, -79.983942],[40.364831, -79.982940]], {color: 'red', weight: 5}).addTo(map).bindTooltip('51', {interactive: true, sticky: true});

    L.polyline([[40.447063, -79.949159],[40.446704, -79.951806]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71C, 93', {interactive: true, sticky: true});

    L.polyline([[40.365736, -80.027147],[40.368163, -80.030239]], {color: 'red', weight: 5}).addTo(map).bindTooltip('RED', {interactive: true, sticky: true});

    L.polyline([[40.452626, -79.949598],[40.452251, -79.950809]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 71A, 71C, 82', {interactive: true, sticky: true});

    L.polyline([[40.447078, -79.948856],[40.446704, -79.951806]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71B, 71D, 75, P3', {interactive: true, sticky: true});

    L.polyline([[40.463247, -79.930903],[40.462057, -79.931700]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71A, 71C, 87', {interactive: true, sticky: true});

    L.polyline([[40.503632, -80.074424],[40.503160, -80.072884]], {color: 'red', weight: 5}).addTo(map).bindTooltip('16', {interactive: true, sticky: true});

    L.polyline([[40.449026, -80.000873],[40.448321, -80.000636]], {color: 'red', weight: 5}).addTo(map).bindTooltip('1, 2, 6, 8, 12<br>13, 15, 16, 17', {interactive: true, sticky: true});

    L.polyline([[40.459171, -79.920112],[40.458136, -79.918523]], {color: 'red', weight: 5}).addTo(map).bindTooltip('71C, 74, 75, 77, 82<br>86, 88, 89', {interactive: true, sticky: true});

    L.polyline([[40.437959, -79.923192],[40.437068, -79.923078]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61C, 61D', {interactive: true, sticky: true});

    L.polyline([[40.447436, -80.003898],[40.449795, -80.004631]], {color: 'red', weight: 5}).addTo(map).bindTooltip('1, 2, 6, 13, 15<br>16, 17', {interactive: true, sticky: true});

    L.polyline([[40.442147, -80.001231],[40.440785, -80.000814]], {color: 'red', weight: 5}).addTo(map).bindTooltip('61A, 61B, 61C, 61D, 71A<br>71B, 71C, 71D', {interactive: true, sticky: true});

    L.polyline([[40.452251, -79.950809],[40.451516, -79.951933]], {color: 'red', weight: 5}).addTo(map).bindTooltip('54, 71A, 71C', {interactive: true, sticky: true});

};
initMap();