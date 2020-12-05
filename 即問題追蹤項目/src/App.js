import React from "react";

const initialIssues = [
  {
    id: 1,
    status: "新",
    owner: "烏鴉",
    effort: 5,
    created: new Date("2020-08-15"),
    due: undefined,
    title: "點擊時打印問題",
  },
  {
    id: 2,
    status: "已經分配",
    owner: "潮潮",
    effort: 14,
    created: new Date("2020-08-16"),
    due: new Date("2020-08-30"),
    title: "底邊界問",
  },
];

class IssueFilter extends React.Component {
  render() {
    return <div>當前問題匯總:</div>;
  }
}

function IssueRow({issue}) {
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created.toLocaleDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toLocaleDateString() : ""}</td>
      <td>{issue.title}</td>
    </tr>
  );
}

function IssueTable({issues}) {
  const issueRows = issues.map((issue) => (
    <IssueRow key={issue.id} issue={issue} />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>號碼</th>
          <th>狀態</th>
          <th>爆料人</th>
          <th>創建</th>
          <th>難度</th>
          <th>截至日期</th>
          <th>標題</th>
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </table>
  );
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      status: "新",
    };
    this.props.createIssue(issue);
    form.owner.value = "";
    form.title.value = "";
  }

  render() {
    return (
      <form name="issueAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="owner" placeholder="爆料人" />
        <input type="text" name="title" placeholder="標題" />
        <button>添加</button>
      </form>
    );
  }
}

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ issues: initialIssues });
    }, 500);
  }

  createIssue(issue) {
    issue.id = this.state.issues.length + 1;
    issue.created = new Date();
    const newIssueList = this.state.issues.slice();
    newIssueList.push(issue);
    this.setState({ issues: newIssueList });
  }

  render() {
    return (
      <>
        <h1> 問題追蹤 </h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </>
    );
  }
}

export default IssueList;
