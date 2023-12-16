// user.view.js
export default class UserView {
    constructor() {
        this.app = this.getElement('#root');

        // Tạo tiêu đề ứng dụng - Créer un titre d'application
        this.title = this.createElement('h1');
        this.title.textContent = 'User Management';

        // Tạo form để nhập tên người chơi - Créer un formulaire pour saisir les noms des joueurs
        this.form = this.createElement('form');
        this.input = this.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Enter player name';
        this.input.name = 'user';
        this.submitButton = this.createElement('button');
        this.submitButton.textContent = 'Submit';
        

        // Tạo danh sách để hiển thị người chơi - Créer une liste pour afficher les joueurs
        this.userList = this.createElement('ul', 'user-list');

        // Thêm input và nút submit vào trong form - Ajouter une entrée et un bouton Soumettre au formulaire
        this.form.append(this.input, this.submitButton);

        // Thêm tiêu đề, form và danh sách vào trong ứng dụng - Ajoutez des titres, des formulaires et des listes à votre application
        this.app.append(this.title, this.form, this.userList);

        // Thêm nút xóa để xóa người chơi được chọn - Ajout d'un bouton Supprimer pour supprimer le joueur sélectionné
        this.deleteButton = this.createElement('button', 'delete');
        this.deleteButton.textContent = 'Delete Selected';
        this.app.append(this.deleteButton);

        // //tạo nút chuyển tiếp
        this.nextButton = this.createElement('button');
        this.nextButton.type = 'button';
        this.nextButton.textContent = 'Next';
        this.nextButton.addEventListener('click', () => this.showCarteView());

        

        // Thêm nút chuyển tiếp vào ứng dụng
        this.app.append(this.nextButton);
    }

    
    // Các phương thức giao tiếp với controller - Méthodes de communication avec le contrôleur
    
    onSubmit(handler) {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            handler(this.input.value.trim());
        });
    }
    
    onDeleteClick(handler) { 
        this.deleteButton.addEventListener('click', () => {
            handler();
        });
    }
    
    onUserClick(handler) {
        this.userList.addEventListener('click', (event) => {
            const clickedUserItem = event.target.closest('.user-item');
            if (clickedUserItem) {
                handler(clickedUserItem.getAttribute('data-name'));
    
                // Thêm class 'clicked' khi click vào 'li'
                clickedUserItem.classList.add('clicked');
                
                // Lắng nghe sự kiện mouseout để xóa class 'clicked'
                clickedUserItem.addEventListener('mouseout', () => {
                    clickedUserItem.classList.remove('clicked');
                });
            }
        });
    }
    // Các phương thức hiển thị - Méthodes d'affichage
    
    showCarteView() {
        // Tạo và hiển thị trang view mới (CarteView)
        const carteView = new CarteView();
        carteView.show();
      }
      show() {
        // Hiển thị trang view Carte
        this.app.innerHTML = '';
        this.app.append(this.title, this.checkboxForm, this.submitButton);
      }
    
    showAlert(message) {
        alert(message);
    }

    displayUsers(users) {
        this.userList.innerHTML = '';
        users.forEach(user => {
            const userItem = this.createElement('li', 'user-item');
            userItem.textContent = user.name;
            userItem.setAttribute('data-name', user.name);
            this.userList.appendChild(userItem);
        });
    }

    // Các phương thức tiện ích - Méthodes utilitaires
    getSelectedUser() {
        // Lấy phần tử người chơi được chọn (nếu có)
        const selectedUserItem = this.userList.querySelector('.user-item.selected');
        
        // Kiểm tra xem có phần tử được chọn hay không
        // Nếu có, trả về giá trị của thuộc tính 'data-name', tức là tên của người chơi
        // Nếu không, trả về null
        return selectedUserItem ? selectedUserItem.getAttribute('data-name') : null;
    }
    

    toggleUserSelected(userName) {
        const userItem = this.userList.querySelector(`.user-item[data-name="${userName}"]`);
        if (userItem) {
            userItem.classList.toggle('selected');
        }
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) {
            element.classList.add(className);
        }
        return element;
    }

    getElement(selector) {
        return document.querySelector(selector);
    }
    // remove() {
    //     if (this.title) {
    //       this.title.remove();
    //     }
    
    //     if (this.userList) {
    //       this.userList.remove();
    //     }
    
    //     if (this.deleteButton) {
    //       this.deleteButton.remove();
    //     }
    //   }
}