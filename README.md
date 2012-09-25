jquery.alignTo
==============

Aligns elements to each other. `$('#box2').alignTo(#('#box1'), { right: 'right', bottom: 'bottom' })` will align the two element's bottom-right corners.

Available sides to align: `top`, `right`, `bottom` and `left`.


### Offset

The positioning can also be offset.

    $('#box2').alignTo(#('#box1'), {
        right: 'right', 
        bottom: 'bottom',
        offset: { top: -30 }
    })




## License

Copyright 2012, [Markus Hedlund](http://markushedlund.com), [Snowfire](http://snowfireit.com).  
Licensed under the MIT License.  
Redistributions of files must retain the above copyright notice.