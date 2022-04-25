angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
    $scope.app = "Lista Telefonica";
    $scope.selecionado = "selecionado";
    
    $scope.contatos = [
        {id:1, nome: "alessandro", dataNascimento: new Date('1996-04-15'), telefone: "99999999", cor: "yellow"},
        {id:2, nome: "joao", dataNascimento: new Date('1994-05-05'), telefone: "99999999", cor: "pink"},
        {id:3, nome: "mateus", dataNascimento: new Date('1998-07-01'), telefone: "99999999", cor: "green"},
        {id:4, nome: "mario", dataNascimento: new Date('1991-12-24'), telefone: "99999999", cor: "black"},
        {id:5, nome: "gabriel", dataNascimento: new Date('2002-01-01'), telefone: "99999999", cor: "white"}
    ];

    $scope.operadoras = [ 
        {nome: "Vivo", codigo: "15", categoria: "Movel"},
        {nome: "Tim", codigo: "41", categoria: "Movel"},
        {nome: "Oi", codigo: "14", categoria: "Movel"},
        {nome: "GVT", codigo: "25", categoria: "Fixo"},
        {nome: "Embratel", codigo: "21", categoria: "Fixo"}
    ];

    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato
    };

    $scope.deletarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        })
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contatos) {
            return contatos.selecionado;
        })
    };

    $scope.aniversario = function(contatos) {
        dataAgora = new Date();
        contato.dataNascimento
        
        return 
    }

    
})