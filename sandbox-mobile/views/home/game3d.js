sandbox_mobile.game3d = function() 
{
    var camera, scene, renderer;
    var geometry, material, mesh;
    var $view = $('.home-view');

    return {
        init: function () {
            $view.empty();
            $view.removeClass('scary');

            scene = new THREE.Scene();

            geometry = new THREE.IcosahedronGeometry(200, 1);
            material = new THREE.MeshBasicMaterial({ color: 'maroon', wireframe: true, wireframeLinewidth: 2 });
            mesh = new THREE.Mesh(geometry, material);

            scene.add(mesh);

            renderer = new THREE.CanvasRenderer();
            renderer.setSize($view.width(), $view.height());
            $(renderer.domElement).appendTo($view);

            camera = new THREE.PerspectiveCamera(75, $view.width() / $view.height(), 1, 1000);
            camera.position.z = 500;

            renderer.render(scene, camera);
        }
    }
}