sandbox_mobile.game3d = function () {
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
            var camera = new THREE.PerspectiveCamera(45, $view.width() / $view.height(), 0.1, 1000);

            // create a render and set the size
            var renderer = new THREE.WebGLRenderer();

            renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
            renderer.setSize($view.width(), $view.height());
            renderer.shadowMap.enabled = true;

            // create the ground plane
            var planeGeometry = new THREE.PlaneGeometry(60, 20);
            var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
            var plane = new THREE.Mesh(planeGeometry, planeMaterial);
            plane.receiveShadow = true;

            // rotate and position the plane
            plane.rotation.x = -0.5 * Math.PI;
            plane.position.x = 15;
            plane.position.y = 0;
            plane.position.z = 0;

            // add the plane to the scene
            scene.add(plane);

            // create a cube
            var cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
            var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
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

            return;
            // 3d debugger
            var controls = new function () {
                this.x = -40;
                this.y = 60;
                this.z = -10;
            }
            var gui = new dat.GUI();
            gui.add(controls, 'x', -100, 100);
            gui.add(controls, 'y', -100, 100);
            gui.add(controls, 'x', -100, 100);
        }
    }
}