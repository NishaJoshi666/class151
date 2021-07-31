AFRAME.registerComponent('box',{
    schema:{
        moveX:{type:'number',default:1}
    },
    tick : function(){
        this.data.moveX = this.data.moveX+0.01
        var pol = this.el.getAttribute('position')
        pol.x = this.data.moveX
        this.el.setAttribute('position',{x:pol.x, y:pol.y})
    }
})