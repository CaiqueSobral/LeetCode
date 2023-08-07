/**
**You are given two non-empty linked lists representing two non-negative integers. 
**The digits are stored in reverse order, and each of their nodes contains a single digit. 
**Add the two numbers and return the sum as a linked list.

**You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

//? Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
  const reverseL1 = appendNodes(l1);
  const reverseL2 = appendNodes(l2);

  const sum = sumNodes(reverseL1, reverseL2);
  const reverseSumArray = sum.split('').reverse();

  return buildLinkedList(reverseSumArray);
}

function appendNodes(list: ListNode | null): string {
  if (!list) return '';

  let nodeAppended = '';
  nodeAppended += appendNodes(list.next);
  nodeAppended += list.val.toString();
  return nodeAppended;
}

function sumNodes(string1: string, string2: string): string {
  const n1 = BigInt(string1);
  const n2 = BigInt(string2);

  return String(n1 + n2);
}

function buildLinkedList(reverseSumArray: string[]): ListNode | null {
  if (!reverseSumArray.length) {
    return null;
  }

  const tempFirstIndex = reverseSumArray.shift();
  return new ListNode(Number(tempFirstIndex), buildLinkedList(reverseSumArray));
}
