'use babel';

import SupportArrView from './support-arr-view';
import { CompositeDisposable } from 'atom';

export default {

  supportArrView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.supportArrView = new SupportArrView(state.supportArrViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.supportArrView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'support-arr:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.supportArrView.destroy();
  },

  serialize() {
    return {
      supportArrViewState: this.supportArrView.serialize()
    };
  },


myfunction()
{
  console.log("clicked");
  this.supportArrView.getElement().innerText="";
},
  toggle()
  {
  if (this.modalPanel.isVisible())
  {
    this.modalPanel.hide();
  }
  else
  {
    const editor = atom.workspace.getActiveTextEditor();

    var regex_1 = /[a-z]+\ +([a-zA-Z$_][a-zA-Z0-9$_]*)\[\ *([0-9]+)\ *\]\;/gm;//int p[10];
    var regex_2 = /[a-z]+\ +([a-zA-Z$_][a-zA-Z0-9$_]*)\[\ *([0-9]+)\ *\]\[\ *([0-9]+)\ *\]\;/gm;//int p[10][10];
    var regex_3 = /[a-z]+\ +([a-zA-Z$_][a-zA-Z0-9$_]*)\[\ *([0-9]*)\ *\]\ *\=\ *\{([0-9]*(?:\,[0-9]+)*)\}\;/gm//int p[2]={1,2};
    var regex_4 = /[a-z]+\ +([a-zA-Z$_][a-zA-Z0-9$_]*)\[\ *([0-9]+)\ *\]\[\ *([0-9]+)\ *\]\ *\=\ *\{((?:\{(?:[0-9]*(?:\,[0-9]+)*)\})(?:\,\{(?:[0-9]*(?:\,[0-9]+)*)\})+)\}\;/gm;
    //int p[2][1] = {{2},{6}};
    //var regex_5=/[a-z]+\ ([a-zA-Z$_][a-zA-Z0-9$_]*)\ *\=\ *\[((?:\[(?:[0-9]+(?:\,[0-9]+)*)\])(?:\,\[(?:[0-9]+(?:\,[0-9]+)*)\])*)\]\;/gm;
    /*int disp[2][4] = {
    {10, 11, 12, 13},
    {14, 15, 16, 17}
};
OR write according to this

int disp[2][4] = { 10, 11, 12, 13, 14, 15, 16, 17};*/
    if (regex_1.test(editor.getSelectedText()))
    {
      const exp= editor.getSelectedText();

    regex_1.lastIndex=0;
    var found = regex_1.exec(exp);

    const identifier = found[1];
    const ar_size =found[2];
    var rows = 1;
    var columns = ar_size;

    this.supportArrView.visualizeNullArray(identifier,rows, columns);
    this.modalPanel.show();


  }
    else if(regex_2.test(editor.getSelectedText()))
    {

      const exp= editor.getSelectedText();

  regex_2.lastIndex=0;
  var found = regex_2.exec(exp);

  const identifier = found[1];
  const ar_size1 =found[2];
  const ar_size2 =found[3];
  var rows = ar_size1;
  var columns = ar_size2;

  this.supportArrView.visualizeNullArray(identifier,rows, columns);
  this.modalPanel.show();
    }
    else if (regex_3.test(editor.getSelectedText()))
    {

  const exp= editor.getSelectedText();

    regex_3.lastIndex=0;
    var found = regex_3.exec(exp);

    const identifier = found[1];
    const ar_size =found[2];
    const elem= found[3];
    var rows = 1;
    var columns = ar_size;

    this.supportArrView.visualize1d(identifier,rows, columns,elem);
    this.modalPanel.show();

  }
  else if (regex_4.test(editor.getSelectedText()))
  {

const exp= editor.getSelectedText();
  regex_4.lastIndex=0;
  var found = regex_4.exec(exp);

  const identifier = found[1];
  const ar_size1 =found[2];
  const ar_size2 = found[3];
  const elem = found[4];
  var rows = ar_size1;
  var columns = ar_size2;

  this.supportArrView.visualize2d(identifier,rows, columns,elem);
  this.modalPanel.show();
}
else if (regex_5.test(editor.getSelectedText()))
{

const exp= editor.getSelectedText();

regex_5.lastIndex=0;
var found = regex_5.exec(exp);
const identifier = found[1];
const elem =found[2];
this.modalPanel.show();
}
else {
  this.supportArrView.nothing();
  this.modalPanel.show();
}
}}};
