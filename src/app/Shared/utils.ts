export function expandTab(event: any, StatusService: any) {
  const allElements = event.target.parentElement.parentElement.childNodes;
  for (const e of allElements) {
    // console.info('💖:', e.localName);
    // if (e.className === 'expanded' && e === event.target.parentElement) {
    //   console.info(e.localName, 'ALREADY EXPANDED 😎');
    // }
    if (e.className === 'expanded' && e !== event.target.parentElement) {
      e.classList.remove('expanded');
      e.classList.add('closed');
    }
    if (e.className === 'closed' && e === event.target.parentElement) {
      e.classList.remove('closed');
      e.classList.add('expanded');
      StatusService.updateTabOpen(e.localName);
    }
    // if (e.className === 'closed' && e !== event.target.parentElement) {
    //   console.info(e.localName, 'ALREADY CLOSED 😴');
    // }
  }
}
