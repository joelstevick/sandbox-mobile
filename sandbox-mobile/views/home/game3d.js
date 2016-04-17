sandbox_mobile.game3d = function() 
{
    var camera, scene, renderer, spotLight;
    var ambient_light;
    var cube_geometry, cube_material, cube_mesh;
    var plane_geometry, plane_material, plane_mesh;
    var $view = $('.home-view');

    return {
        init: function () {
            $view.empty();
            $view.removeClass('scary');

            // create a scene, that will hold all our elements such as objects, cameras and lights.
            var scene = new THREE.Scene();

            // create a camera, which defines where we're looking at.
            var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

            // create a render and set the size
            var renderer = new THREE.WebGLRenderer();

            renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMapEnabled = true;

            // create a cube
            var cubeGeometry = new THREE.BoxGeometry(8, 8, 8);
            var cubeMaterial = new THREE.MeshLambertMaterial({ color: 'tan' });
            var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.castShadow = true;

            // position the cube
            cube.position.x = -4;
            cube.position.y = 3;
            cube.position.z = 0;

            // add the cube to the scene
            scene.add(cube);

            // position and point the camera to the center of the scene
            camera.position.x = -30;
            camera.position.y = 40;
            camera.position.z = 30;
            camera.lookAt(scene.position);

            // add spotlight for the shadows
            var spotLight = new THREE.SpotLight(0xffffff);
            spotLight.position.set(-40, 60, -10);
            spotLight.castShadow = true;
            scene.add(spotLight);

            // render the scene
            $(renderer.domElement).appendTo($view);

            renderer.render(scene, camera);

        }
    }
}