//utils.js

//方式1问题
function question1_answer() {
  var data = [
    { "id": 1, "question": "您的腰臀比（腰围和臀围的比值）是否小于0.89？", "answer": [{ "option": "A", "text": "是", "action": "2" }, { "option": "B", "text": "否", "action": "6" }] },
    { "id": 2, "question": "您的腰围是否小于81.25厘米？", "answer": [{ "option": "A", "text": "是", "action": "result_R1" }, { "option": "B", "text": "否", "action": "3" }] },
    { "id": 3, "question": "您的年龄是否小于52.2岁？", "answer": [{ "option": "A", "text": "是", "action": "4" }, { "option": "B", "text": "否", "action": "5" }] },
    { "id": 4, "question": "您有高血压病史是否小于9个月？（没有高血压病史请点是）", "answer": [{ "option": "A", "text": "是", "action": "result_R2" }, { "option": "B", "text": "否", "action": "result_R3" }] },
    { "id": 5, "question": "您的腰围是否小于94.5厘米？", "answer": [{ "option": "A", "text": "是", "action": "result_R4" }, { "option": "B", "text": "否", "action": "result_R5" }] },
    { "id": 6, "question": "您有高血压病史是否大于等于6个月？（没有高血压病史请点否）", "answer": [{ "option": "A", "text": "是", "action": "result_R6" }, { "option": "B", "text": "否", "action": "7" }] },
    { "id": 7, "question": "您的体重是否大于等于88.5公斤？", "answer": [{ "option": "A", "text": "是", "action": "result_R7" }, { "option": "B", "text": "否", "action": "8" }] },
    { "id": 8, "question": "您的年龄是否小于46.5岁？", "answer": [{ "option": "A", "text": "是", "action": "result_R8" }, { "option": "B", "text": "否", "action": "9" }] },
    { "id": 9, "question": "您的年龄是否小于69.5岁？", "answer": [{ "option": "A", "text": "是", "action": "result_R9" }, { "option": "B", "text": "否", "action": "10" }] },
    { "id": 10, "question": "您的腰臀比（腰围和臀围的比值）是否大于0.94？", "answer": [{ "option": "A", "text": "是", "action": "result_R10" }, { "option": "B", "text": "否", "action": "11" }] },
    { "id": 11, "question": "您的年龄是否小于62.5岁？", "answer": [{ "option": "A", "text": "是", "action": "result_R11" }, { "option": "B", "text": "否", "action": "result_R12" }] }
  ];
  return data;
}

function question2_answer(){
  var data = [
    { "id": 1, "question": "您有高血压病史是否小于9个月？（没有高血压病史请点是）", "answer": [{ "option": "A", "text": "是", "action": "2" }, { "option": "B", "text": "否", "action": "result_R20" }] },
    { "id": 2, "question": "您的腰臀比（腰围和臀围的比值）是否小于0.91？", "answer": [{ "option": "A", "text": "是", "action": "3" }, { "option": "B", "text": "否", "action": "4" }] },
    { "id": 3, "question": "您是否有糖尿病的家族史？", "answer": [{ "option": "A", "text": "是", "action": "result_R13" }, { "option": "B", "text": "否", "action": "result_R14" }] },
    { "id": 4, "question": "您的年龄是否小于71.5岁？", "answer": [{ "option": "A", "text": "是", "action": "5" }, { "option": "B", "text": "否", "action": "result_R19" }] },
    { "id": 5, "question": "您的年龄是否小于46.5岁？", "answer": [{ "option": "A", "text": "是", "action": "result_R15" }, { "option": "B", "text": "否", "action": "6" }] },
    { "id": 6, "question": "您的腰臀比（腰围和臀围的比值）是否大于等于0.92？", "answer": [{ "option": "A", "text": "是", "action": "result_R16" }, { "option": "B", "text": "否", "action": "7" }] },
    { "id": 7, "question": "您的腰围是否小于97.75厘米？", "answer": [{ "option": "A", "text": "是", "action": "result_R17" }, { "option": "B", "text": "否", "action": "result_R18" }] }
  ];
  return data;
}

//答案
function question_result() {
  var result = {
    "R1": { "status": "0", "case": "疾病发生概率：4.9%", "control": "可控率：22.6%", "caution": "您处于低风险状态，请继续保持！" },
    "R2": { "status": "0", "case": "疾病发生概率：1.7%", "control": "可控率：7.9%", "caution": "您处于低风险状态，请继续保持！" },
    "R3": { "status": "1", "case": "疾病发生概率：1.9%", "control": "可控率：0.9%", "caution": "您处于高风险状态，请注意您的身体状态！" },
    "R4": { "status": "0", "case": "疾病发生概率：0.4%", "control": "可控率：1.1%", "caution": "您处于低风险状态，请继续保持！" },
    "R5": { "status": "1", "case": "疾病发生概率：5.1%", "control": "可控率：3.4%", "caution": "您处于高风险状态，请注意您的身体状态！" },
    "R6": { "status": "1", "case": "疾病发生概率：17.5%", "control": "可控率：3.2%", "caution": "您处于高风险状态，请注意您的身体状态！" },
    "R7": { "status": "1", "case": "疾病发生概率：3.8%", "control": "可控率：0.4%", "caution": "您处于高风险状态，请注意您的身体状态！" },
    "R8": { "status": "0", "case": "疾病发生概率：1.7%", "control": "可控率：4.7%", "caution": "您处于低风险状态，请继续保持！" },
    "R9": { "status": "0", "case": "疾病发生概率：0.9%", "control": "可控率：3.0%", "caution": "您处于低风险状态，请继续保持！" },
    "R10": { "status": "1", "case": "疾病发生概率：4.5%", "control": "可控率：0.9%", "caution": "您处于高风险状态，请注意您的身体状态！" },
    "R11": { "status": "0", "case": "疾病发生概率：3.0%", "control": "可控率：4.9%", "caution": "您处于低风险状态，请继续保持！" },
    "R12": { "status": "1", "case": "疾病发生概率：1.9%", "control": "可控率：0.9%", "caution": "您处于高风险状态，请注意您的身体状态！" },
    "R13": { "status": "1", "case": "疾病发生概率：1.9%", "control": "可控率：0.8%", "caution": "您处于高风险状态，请注意您的身体状态！" },
    "R14": { "status": "0", "case": "疾病发生概率：10.2%", "control": "可控率：34.4%", "caution": "您处于低风险状态，请继续保持！" },
    "R15": { "status": "0", "case": "疾病发生概率：1.7%", "control": "可控率：3.1%", "caution": "您处于低风险状态，请继续保持！" },
    "R16": { "status": "1", "case": "疾病发生概率：2.7%", "control": "可控率：0.4%", "caution": "您处于高风险状态，请注意您的身体状态！" },
    "R17": { "status": "0", "case": "疾病发生概率：2.9%", "control": "可控率：3.9%", "caution": "您处于低风险状态，请继续保持！" },
    "R18": { "status": "1", "case": "疾病发生概率：4.0%", "control": "可控率：1.6%", "caution": "您处于高风险状态，请注意您的身体状态！" },
    "R19": { "status": "0", "case": "疾病发生概率：0.3%", "control": "可控率：1.7%", "caution": "您处于低风险状态，请继续保持！" },
    "R20": { "status": "1", "case": "疾病发生概率：20.2%", "control": "可控率：10.1%", "caution": "您处于高风险状态，请注意您的身体状态！" }
  };
  return result;
}

function tips(){
  var tip = {
     "0": {"tip": "糖尿病人应选少油少盐的清淡食品，菜肴烹调多用蒸、煮、凉拌、涮、炖、卤等方式。烹调宜用植物油，尽量减少赴宴。在赴宴时也要尽量按照平时在家吃饭时的量和食物间的搭配来选择饭菜" },
     "1": {"tip": "有人认为肉是蛋白质，饭才是糖，因此，多吃肉不会引起血糖升高。其实不然，肉到体内也能转变成糖。糖尿病患者每日胆固醇摄入量应小于200毫克，要限制动物性脂肪及含饱和脂肪酸高的脂肪摄入，少吃油煎、炸食物及猪、鸡、鸭、腰花、肝、肾等动物内脏类食物。" },
     "2": {"tip": "注意进食规律，一日至少进食三餐，而且要定时、定量，两餐之间要间隔4-5小时。注射胰岛素的病人或易出现低血糖的病人还应在三次正餐之间加餐2-3次，可从三次正餐中拿出一部分食品留做加餐用，这是防止低血糖行之有效的措施。" },
     "3": {"tip": "虽然无糖糕点不含蔗糖，但糕点是淀粉做的，同样会产生热量，故不能随便多吃;糖尿病患者须忌食糖(白糖、红糖、葡萄糖、水果糖、麦芽糖、奶糖、巧克力、蜂蜜)、糖类制品(蜜饯、 水果罐头、各种含糖饮料、含糖糕点、果酱、果脯) 。这些食品可导致血糖水平迅速上升，直接加重病情，干扰糖尿病的治疗。" },
    "4": { "tip": "避免肥胖，维持理想且合适的体重。" },
    "5": { "tip": "定时定量，每餐饮食按照计划份量进食，不可任意增减。" },
    "6": { "tip": "少吃油煎、炸、油酥及猪皮、鸡皮、鸭皮等含油脂高的食物。" },
    "7": { "tip": "烹调多采用清蒸、水煮、凉拌、涮、烤、烧、炖、卤等方式。不可太咸，食盐摄入量6克以下为宜" },
    "8": { "tip": "饮食不可太咸，少吃胆固醇含量高的食物，例如腰花、肝、肾等动物内脏类食物。" },
    "9": { "tip": "烹调宜用植物性油脂。" },
    "10": { "tip": "配合长期性且适当的运动、药物、饮食的控制。" },
    "11": { "tip": "经常选用含纤维质高的食物，如未加工的蔬果等。" },
    "12": { "tip": "含淀粉质高的食物及中西式点心均应按计划的份量食用，不可随意吃，以免过量吸取。" },
    "13": { "tip": "少吃精制糖类的食物，如炼乳、蜜饯。" },
    "14": { "tip": "多使用苦瓜或苦瓜茶，苦瓜降糖更安全、无任何副作用，糖尿病预防和控制要比治疗简单的多。" }
  };
  return tip;
}
//模块化
module.exports = {
  question1_answer: question1_answer,
  question2_answer: question2_answer,
  question_result: question_result,
  tips:tips
}