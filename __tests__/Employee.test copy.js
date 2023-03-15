function Employee(id, name, email){
    this.id = id;
    this.name = name;
    this.email = email;

    this.getName = function(){
        return this.name;
    }

    this.getId = function(){
        return this.id;
    }

    this.getEmail = function(){
        return this.email
    }

    this.getRole = function(){
        return 'Employee';
    }

    this.renderCard = function(){
        const CardHTML = `
            <div class="card text-bg-primary m-2" style="width: 18rem;">
                <div class="card-body">
                    <h2 class>Name</h2>
                    <h5 class="card-title">Title</h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${this.getName()}</li>
                        <li class="list-group-item">Email: ${this.getEmail()}</li>
                    </ul>
                </div>
            </div>
        `;
        return CardHTML;
    }
}
