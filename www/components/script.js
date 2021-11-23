      function photo(){

      let photoOption = {
          //第三引数 option：アルバムに写真を保存する
          saveToPhotoAlbum: true,
      };
      //端末のカメラを呼び出し。第一引数：成功処理、第二引数：失敗した際の処理、第三引数：オプション
      //https://github.com/apache/cordova-plugin-camera#module_camera.getPicture
      navigator.camera.getPicture(success, error, photoOption);
          
      //成功時
      function success(imageURI){
          let image = document.getElementById('camera');
          image.src = imageURI;
      }
          
      //失敗時
      function error(message){
          alert("エラー：" + message);
      }
  }
