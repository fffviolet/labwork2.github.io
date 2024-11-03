class TreasureMap {
  static getInitialClue() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve("在神秘的洞穴中找到了第一个线索...");
          }, 1000);
      });
  }

  static decodeAncientScript(clue) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (!clue) {
                  reject("没有线索可以解码!");
              }
              resolve("解码成功!宝藏在一座废弃的城堡中...");
          }, 1500);
      });
  }

  static searchCastle(location) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              const random = Math.random();
              if (random < 0.4) {
                  reject("糟糕!遇到了城堡守卫!");
              }
              resolve("找到了一个华丽的箱子...");
          }, 2000);
      });
  }

  static openTreasureBox() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve("太棒了!你找到了传奇宝藏!");
          }, 1000);
      });
  }
}

async function findTreasureWithPromises(button) {
  button.disabled = true;
  document.querySelectorAll('.result').forEach(el => {
      el.textContent = '';
      el.classList.add('hidden');
      el.parentElement.querySelector('img').classList.add('hidden');
  });
  try{
    const clue=await TreasureMap.getInitialClue();
    showResult('#result1', clue);
    const location=await TreasureMap.decodeAncientScript(clue);
    showResult('#result1', location);
    const box=await TreasureMap.searchCastle(location);
    showResult('#result2', box);
    document.querySelector('#result2').parentElement.querySelector('img').classList.remove('hidden');
    const treasure=await TreasureMap.openTreasureBox();
    showResult('#result2', treasure);
  }catch(error){
    showResult('#result3', "任务失败: " + error);
    document.querySelector('#result3').parentElement.querySelector('img').classList.remove('hidden');
  }finally{
    button.disabled = false; // 重新启用按钮
  }
}

function showResult(selector, text) {
  const el = document.querySelector(selector);
  el.textContent = text;
  setTimeout(() => {
      el.classList.remove('hidden');
      el.parentElement.querySelector('img').classList.remove('hidden'); // 显示对应图片
  }, 50);
}