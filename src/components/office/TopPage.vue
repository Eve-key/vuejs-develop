<template>
  <div id="office">
    <!--変数を表示させる際は{{}}で囲う-->
    <!--文字列を表示させる際は{{}}で囲わなくても良い-->
    <span class="title"> {{'who do you like?'}}</span>
    <br>
    <br>
    <span class="subTitle">{{'click on the character'}}</span>
     <br>
 <span class="subTitle">{{'Something happens when you click 10 times...........'}}</span>
    <div class="position">
      <!--子Componentクラスに渡したい情報がある場合
      v-bind:変数(フィールド)="変数(フィールド)"で渡す(Propの機能)-->
      <SetImage
        class="charStyle"
        v-bind:characterList="characterList">
      </SetImage>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Profile } from '@/interface/Profile';//@はディレクトリ階層がsrcから始まることを意味する
import SetImage from './SetImage.vue';
import jquery from 'jquery';
import axios from 'axios';


//子コンポーネントに渡す情報がある場合は以下に子コンポーネントクラスを定義する
@Component({
  components: {
    SetImage,
  },
})
export default class TopPage extends Vue {
  private characterList: Profile[] = [];
  private user: any[] = [];

  //Ajaxでサーバーからデータ取得する際の書き方(尚、このアプリでは実際には使用されていない)
  private fetchUser(): Promise<any[]>{
    //function()は()=>と同じ意味(アロー関数)
    return new Promise((resolve,reject) => {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/sample/api',
        dataType: 'json',
        success: (res: any) => {
          console.log(res);
          resolve(res);
        },
      });
    });
  }

  //createメソットは使用されている箇所は存在しないがvueのライフサイクルによって
  //インスタンス生成時に呼ばれる(vue公式サイトvueのライフサイクル参照)
  private created(): void {
    this.characterList.push(
      {
        name: 'AI',
        age: 17,
        //画像を使用したい場合はディレクトリパスの前にrequireを付ける
        image: require('../../../public/img/Ai.jpg'),
        position:{
           position:'relative',
           top: "100px",
           left: "-50px",
           color: "blue"
        },
        count: 0
      },
      {
        name: 'Kokoro',
        age: 17,
        image: require('../../../public/img/Kokoro.jpg'),
        position:{
           position:'relative',
           top: "300px",
           left: "-120px",
           color: "brown"
        },
         count: 0
      },
      {
        name: 'Maki',
        age: 17,
        image: require('../../../public/img/Maki.jpg'),
        position:{
           position:'relative',
           top: "100px",
           left: "-210px",
           color: "black"
        },
         count: 0
      },
      {
        name: 'Ringo',
        age: 17,
        image: require('../../../public/img/Ringo.jpg'),
        position:{
           position:'relative',
           top: "-150px",
           left: "500px",
           color: "pink"
        },
         count: 0
      },
    );
    //Promise.allは引数に配列を設定し、その配列の要素に先程のAjax
    //取得のメソッドを設定(要素は幾つでも設定可)
    Promise.all(
      [this.fetchUser()]
    )
      .then((users: any) => {
        this.user.push(users[0].name);
      });
  }
}
</script>

<style>
#office {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

span.title {
  font-size: 60px;
  font-family: 'Shadows Into Light', cursive;
}

span.subTitle {
  font-size: 30px;
  font-family: 'Shadows Into Light', cursive;
}

.position　{
  text-align: center;
}

.charStyle　{
  display: inline-block;
  font-family: 'Reenie Beanie', cursive;
  
}
</style>