function Background() {
    var cameraTarget = new THREE.Vector3();

	var light1 = new THREE.PointLight( 0x50d1ff, 5, 250 );
	scene.add( light1 );

	var light2 = new THREE.PointLight( 0xaaa0ff, 3, 250 );
    scene.add( light2 );


    // calc
    var calc_material = new THREE.MeshBasicMaterial({
        map: (new THREE.TextureLoader()).load('img/calc.png'),
        blending: THREE.MultiplyBlending
    });
    calc_material.needsUpdate = true;

    var calc_plane = new THREE.PlaneGeometry( 33, 48 );

    for ( var i = 0; i < 800 ; i+= 80 ) {
        var radius = 50 + ( Math.random() * 150 );
        var object = new THREE.Mesh( calc_plane, calc_material);
        object.position.x = Math.random() - 0.5;
        object.position.y = Math.random() - 0.5;
        object.position.normalize();
        object.position.multiplyScalar( radius );
        object.lookAt( scene.position );
        //object.position.z = Math.random() * 1500 ;
        object.position.z = ( i * 4 ) - 500;
        scene.add(object);
    }

    // tunnel

    var plane = new THREE.PlaneGeometry( 3, 3 );
    var geometry = new THREE.Geometry() ;
    var material = new THREE.MeshLambertMaterial( {
        color: 0x606060,
        shading: THREE.FlatShading,
        side: THREE.DoubleSide
    } );

    for ( var i = 0; i < 800; i += 2 ) {
        var radius = 50 + ( Math.random() * 150 );

        var object = new THREE.Mesh( plane, material);
        object.position.x = Math.random() - 0.5;
        object.position.y = Math.random() - 0.5;
        object.position.normalize();
        object.position.multiplyScalar( radius );
        object.lookAt( scene.position );
        object.position.z = ( i * 4 ) - 500;
        object.scale.x = Math.random() * 10;
        object.scale.y = Math.random() * 10;
        object.scale.z = Math.random() * 20;
        THREE.GeometryUtils.merge( geometry, object );

    }

    var tunnel1 = new THREE.Mesh( geometry, material );
    scene.add( tunnel1 );

    var geometry = new THREE.Geometry();
    var material = new THREE.MeshLambertMaterial( {
        color: 0x606060,
        shading: THREE.FlatShading,
        side: THREE.DoubleSide,
        wireframe: true
    } );

    for ( var i = 0; i < 800; i += 2 ) {
        var radius = 50 + ( Math.random() * 150 );

        var object = new THREE.Mesh( plane, material );
        object.position.x = Math.random() - 0.5;
        object.position.y = Math.random() - 0.5;
        object.position.normalize();
        object.position.multiplyScalar( radius );
        object.lookAt( scene.position );
        object.position.z = ( i * 4 ) - 500;
        object.scale.x = Math.random() * 10;
        object.scale.y = Math.random() * 10;
        object.scale.z = Math.random() * 20;
        THREE.GeometryUtils.merge( geometry, object );

    }

    var tunnel2 = new THREE.Mesh( geometry, material );
    scene.add( tunnel2 );


    /*
    var tunnel = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( {
        blending: THREE.AdditiveBlending,
        transparent: true,
        wireframe: true
    } ) );
    scene.add( tunnel );
    */

    //

    var startPosition = new THREE.Vector3();
    var endPosition = new THREE.Vector3();
    var deltaPosition = new THREE.Vector3();

    var startPositionTarget = new THREE.Vector3();
    var endPositionTarget = new THREE.Vector3();
    var deltaPositionTarget = new THREE.Vector3();

    this.start = function ( t, parameters ) {
        startPosition.fromArray( parameters.startPosition );
        endPosition.fromArray( parameters.endPosition );
        deltaPosition.subVectors( endPosition, startPosition );

        startPositionTarget.fromArray( parameters.startPositionTarget );
        endPositionTarget.fromArray( parameters.endPositionTarget );
        deltaPositionTarget.subVectors( endPositionTarget, startPositionTarget );
    };

    this.update = function ( t ) {
        //light1.intensity = 5 - ( ( t * 82 ) % 5 );

        light1.position.z = t * 2000 + 50;
        light2.position.z = t * 2000 - 50;

        tunnel1.rotation.z = t * 2;
        tunnel2.rotation.z = - t * 2;

        camera.position.copy( deltaPosition );
        camera.position.multiplyScalar( t );
        camera.position.add( startPosition );

        cameraTarget.copy( deltaPositionTarget );
        cameraTarget.multiplyScalar( t );
        cameraTarget.add( startPositionTarget );

        camera.lookAt( cameraTarget );

     //   renderer.render( scene, camera );
    };

};


function onWindowResize(){
    // Update window size
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    // notify the renderer of the size change
    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    // update the camera
    camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    camera.updateProjectionMatrix();
}

function animate() {
    // Update all objects with animation
    if ( t >= 1.4 && delta > 0 )
        delta *= -1;
    else if ( t <= 0 && delta < 0 )
        delta *= -1

    t += delta;
    background.update(t);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var t = 0;
var delta = 0.0005;

// Scene
scene = new THREE.Scene();

// Background
background = new Background();
background.start(0, {startPosition:[50,-50,300],endPosition:[-50,-25,1700],startPositionTarget:[0,0,-50],endPositionTarget:[0,0,2050]});

// Camera
camera = new THREE.PerspectiveCamera(60, SCREEN_WIDTH / SCREEN_HEIGHT, 0.1, 1500);
camera.up.y = 0.5;
camera.up.x = -1;
camera.up.normalize();

// Renderer
renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false}) ;
renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
renderer.setClearColor(0, 1);

// Handle window resize event
window.addEventListener('resize', onWindowResize, false);

document.body.appendChild(renderer.domElement);

animate();
