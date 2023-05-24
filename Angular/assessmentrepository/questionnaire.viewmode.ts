export class QuestionnaireViewModel {
    ID: string;
    _id:string;
    AssessmentQuestionID: number;
    ChapterID: string;
    ChapterSectionID:string;
    QuestionType: string;
    QuestionContent: QuestionContentViewModel[];
    Option: string[];
    Answers: string[];
    OrderID: number;
  }

  export class QuestionContentViewModel{
      ID:number;
      _id:"";
      QCKey:string;
      QCValue:string;
      OrderID:number;
  }

  export class QuestionOptionViewModel{
    ID:number;
    _id:"";
    QCKey:string;
    QCValue:string;
    Control:string;
    Comment:string;
    OrderID:number;
}

export class QuestionAnswerViewModel{
  ID:number;
  _id:"";
  QCKey:string;
  QCValue:string;
  Control:string;
  OrderID:number;
}
