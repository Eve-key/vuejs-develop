<template>
  <div>
    <!--v-forはv-for="配列の要素 in 配列"の構成
    またv-bind:key="配列の要素"の記載が抜けているとエラーになる-->
      <div id ="position"
        v-for="(character, index) in characterList"
        v-bind:key="character">
        <!--v-bind:style="オブジェクト"でスタイルの記載が可能。
        ただしオブジェクトの中身のプロパティは必ずキャメルケースで記載する
        ({font-size:100px}のようにケバブケースで記載するとエラーになる為、
        {fontSize:100px}の様にキャメルケースで記載する)-->
        <div
          v-bind:style="character.position"
          v-on:click="counter(index)">
        <!--画像を挿入する際はv-bind:src="ディレクトリパス"で記載する-->
        <img v-bind:src="character.image"/>
        <div class="display">
          <div class="name">{{character.name}}</div>
          <div class="count">{{character.count}}</div>
        </div>
        <div v-if="character.count>=10 && index===0">
          <transition name="fade">
          <a  class="selectOne" href="https://github.com/Eve-key">My GitHub</a>
          </transition>
        </div>
        <div v-else-if="character.count>=10 && index===1">
          <a class="selectTwo" href="https://jp.vuejs.org/index.html">Study Vuejs</a>
        </div>
        <div v-else-if="character.count>=10 && index===2">
          <a class="selectThree" href="https://www.youtube.com">YouTube</a>
        </div>
        <div v-else-if="character.count>=10 && index===3">
          <a class="selectFour" href="https://github.com/Eve-key">My GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Profile } from '@/interface/Profile';
import jquery from 'jquery';

@Component({
  components: {
  },
})
export default class SetImage extends Vue {
    //親Componentの情報が渡ってきた場合変数の前に@Prop()を記載する
    //また変数のあとは:ではなく!:になる
    @Prop() private characterList!: Profile[];
    
    private counter(index: number): void {
      this.characterList[index].count++;
    }
}
</script>

<style>
#position {
  display: inline-block;
  font-size: 30px;
}

.display {
  display: inline-block;
}

.name {
  position: relative;
  font-size: 45px;
  font-family: 'Shadows Into Light', cursive;
  bottom: -92px;
  right: 225px;
}

.count {
  position: relative;
  bottom: -40px;
  right: 125px;
  font-size: 30px;
}

.selectOne {
  position: relative;
  font-size: 45px;
  top: 30px;
  right: 40px;
  font-family: 'Shadows Into Light', cursive;
}

.selectTwo {
  position: relative;
  font-size: 45px;
  top: 30px;
  right: 40px;
  font-family: 'Shadows Into Light', cursive;
}

.selectThree {
  position: relative;
  font-size: 45px;
  right: 40px;
  top: 30px;
  font-family: 'Shadows Into Light', cursive;
}

.selectFour {
  position: relative;
  font-size: 45px;
  right: 40px;
  top: 30px;
  font-family: 'Shadows Into Light', cursive;
}

.selectOne:hover {
  color : aqua;
}

.selectTwo:hover {
  color : burlywood;
}

.selectThree:hover {
  color : blueviolet;
}

.selectFour:hover {
  color : pink;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
