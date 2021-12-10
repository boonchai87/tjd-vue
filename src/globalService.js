import $ from 'jquery';
export default {
    data(){
        return {
            authorized : "form global",
            authenticatedUser : null,
            restUrl : "https://tjd-nodejs.herokuapp.com/",
            //restUrl : "http://localhost:5000/",
            loading: false,
            id:'',
        }
    },
    created(){
       
    },
    methods:{
        test(){
            return this.authorized;
        },
        openModal(){
                
        },
        closeModal(){

        },
        gotoPage(page){
            $("#collapsibleNavbar").removeClass("show");
            this.$router.push(page);
        },
        logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('user');
            this.$router.push("/login");
        },
        getUrlParameter(name) {
            name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        },
    }
}