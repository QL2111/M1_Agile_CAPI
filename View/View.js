const View = (UserName, selectedCard) => {
    // Tạo một div chứa nội dung view
    const viewContent = document.createElement('div');
    viewContent.id = 'view-content';
  
    // Tạo các phần tử HTML để hiển thị thông tin người chơi và thẻ được chọn
    const title = document.createElement('h1');
    title.textContent = 'Thông tin người chơi và thẻ đã chọn';
  
    const userNameElement = document.createElement('p');
    userNameElement.textContent = `Tên người chơi: ${UserName || 'Không xác định'}`;
  
    const selectedCardElement = document.createElement('div');
    selectedCardElement.innerHTML = `
      <p>Thẻ đã chọn:</p>
      <img src="/img/${selectedCard}" alt="Selected Card">
    `;
  
    // Thêm các phần tử vào nội dung view
    viewContent.appendChild(title);
    viewContent.appendChild(userNameElement);
    viewContent.appendChild(selectedCardElement);
  
    return viewContent;
  };
  
  export default View;
  