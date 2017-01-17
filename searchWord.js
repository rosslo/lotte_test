function searchWord(board, word) {
    if(word==="")return true;
    var i=0,j=0;
    for(i=0;i<board.length;i++){
        for(j=0;j<board[i].length;j++){
            if(board[i][j]===word[0]){ //判斷有第一個字符合，在不同的座標開始進入
                if(check(0,i,j))return true; //檢查所有的字母是否相鄰依順序存在
            }
        }
    }
    return false;
    function check(index,x,y){
        if(index===word.length)return true; //代表已經查找到最後一個符合的字母
        if(!board[x] || !board[x][y]) return false; //如果Board上沒辦法繼續移動
        if(board[x][y]===word[index]){ //判斷移動後的下一個Board的字母是否與Word字母相同，相同繼續在Board上移動並check
            var letter = word[index];
            board[x][y]=" "; //置換空白，表示已查找過
            index+=1; //查找word的下一個字母
            if(check(index,x+1,y))return true; //左移，若不同移別的方向
            if(check(index,x-1,y))return true; //右移，若不同移別的方向
            if(check(index,x,y+1))return true; //往上，若不同移別的方向
            if(check(index,x,y-1))return true; //往下，若不同則失敗
            board[x][y]=letter; //沒有繼續移動，把字母放回去，嘗試從不同座標點進入
        }
        return false;
    }
}
module.exports = searchWord;