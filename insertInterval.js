function insertInterval(intervals, newInterval) {
    var result = []; //用於重新整理intervals
     //新區間可以直接插入原先區間前後
    if(intervals.length===0){
        intervals[0]=newInterval;
        return intervals;
    }
    if(intervals[intervals.length-1][1]<newInterval[0]){
        intervals.push(newInterval);
        return intervals;
    }else if(intervals[0][0]>newInterval[1]){
        result.push(newInterval);
        for(i=0;i<intervals.length;i++){//1
            result.push(intervals[i]);
        }
        intervals=result;
        return intervals;
    }
    var left=[],right=[]; //left=新的區間的開始值插入原區間的位子 right=新的區間的末端值插入原區間的位子
    var i=0,j=0; //迴圈變數
    //新區間可以直接插入原先區間中間
    for(i=0;i<intervals.length;i++){//1
        for(j=0;j<intervals[i].length;j++){//2
            if(newInterval[0]<=intervals[i][j]&&left[0]===undefined){
                left=[i,j];
            }
            if(newInterval[1]<=intervals[i][j]&&right[0]===undefined){
                right=[i,j];
            }
        }
    }
    if(left[0]===right[0] && left[1]===right[1]){
        for(i=0;i<intervals.length;i++){
            if(i===left[0]){
                result.push(newInterval);
            }
            result.push(intervals[i]);
        }
        intervals=result;
        return intervals;
    }
     //插入的新區間包裹住原先區間
        for(i=0;i<intervals.length;i++){//1
            for(j=0;j<intervals[i].length;j++){//2
                if(newInterval[0]<=intervals[i][j]){
                    intervals[i][j]=newInterval[0];
                    left=[i,j];
                    i=intervals.length; //跳出最外面的for迴圈
                    break;
                }
            }
        }
        for(i=intervals.length-1;i>=0;i--){
            for(j=intervals[i].length-1;j>=0;j--){
                if(newInterval[1]>=intervals[i][j]){
                    intervals[i][j]=newInterval[1];
                    right=[i,j];
                    i=-1;
                    break;
                }
            }
        }
        //如果新區間兩個值插入的位子相同
        if(left[0]===right[0] && left[1]===right[1] ){
            return intervals;
        }
        //如果新區間兩個值插入的位子不相同
        else{
            for(i=0;i<=left[0];i++){
                result.push(intervals[i]);
            }
            for(i=right[0];i<intervals.length;i++){
                result.push(intervals[i]);
            }
            intervals=result;
            for(i=0;i<intervals.length;i++){
                for(j=0;j<intervals[i].length;j++){
                    if(newInterval[0]===intervals[i][j]){
                        left=[i,j];
                    }
                    else if(newInterval[1]===intervals[i][j]){
                        right=[i,j];
                    }
                }
            }
            //如果新區間兩個值插入的位子相鄰
            if((left[0]+1)===right[0] && ((left[1]-1)===right[1])){
                i=left[0];
                j=left[1];
                intervals[i][j]=intervals[i+1][j];
                result = [];
                for(i=0;i<intervals.length;i++){
                    if(i!==right[0]){
                        result.push(intervals[i]);
                    }
                }
                intervals=result;
                return intervals;
            }
            //如果新區間兩個值插入的位子不相鄰
            if((left[0]+1)===right[0] && ((left[1]+1)===right[1])){
                i=left[0];
                j=left[1];
                intervals[i][j+1]=intervals[i+1][j+1];
                result = [];
                for(i=0;i<intervals.length;i++){
                    if(i!==right[0]){
                        result.push(intervals[i]);
                    }
                }
                intervals=result;
                return intervals;
            }
            if((left[0]+1)===right[0] && (left[1]===right[1])){
                i=left[0];
                intervals[i][1]=intervals[i+1][1];
                result = [];
                for(i=0;i<intervals.length;i++){
                    if(i!==right[0]){
                        result.push(intervals[i]);
                    }
                }
                intervals=result;
                return intervals;
            }
        }
}
module.exports = insertInterval;