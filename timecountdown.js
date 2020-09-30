eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    }
    ;
    if (!''.replace(/^/, String)) {
        while (c--)
            r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }
        ];
        e = function() {
            return '\\w+'
        }
        ;
        c = 1
    }
    ;while (c--)
        if (k[c])
            p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
    return p
}('5(P o=="16")4 o=9 w(){};o.14=w(a,b,c){4 d=9 G();4 e=0;5(P a=="13"){4 f=8(9 y().s()/7);4 g=a.I?8(a.I):0;g=g==0?f:g;4 h=a.12;4 x=g-f;d.n=8(a.6?a.6:0)}q{4 f=0;4 x=0;d.n=0;4 h=a;4 i=h.X();5(i.U(\'.\')>0){d.n=i.S(\'.\')[1];5(d.n>3){d.n=3}}}d.D=h;d.M=R;5(L(h)){4 j=h.11(0,19);j=j.J(/-/g,\'/\');d.D=9 y(j).s()/7}4 k=d.n==0?r:r;d.A=0;d.v=0;d.B=0;d.C=0;d.t=O(w(){e=9 y().s();f=8(e/7+x);4 l=d.D-f;5(l<=0){e=0;l=0}5(l>=0){d=o.F(d,l)}5(d.n==1){d.m=d.6=8(10-e%7/r);5(d.6==10||l==0){d.m=d.6=0}}q 5(d.n==2){d.m=d.6=8(r-e%7/10);5(d.6<10){d.m=\'0\'+d.6}q 5(d.6==r||l==0){d.6=0;d.m=\'0\'+d.6}}q{d.m=d.6=8(7-e%7);5(d.6<10){d.m=\'K\'+d.6}q 5(d.6<r){d.m=\'0\'+d.6}q 5(d.6==7||l==0){d.6=0;d.m=\'K\'+d.6}}5(b){b(d)}5(l<=0||d.T==E){V(d.t);d.M=E;5(c)c(d)}},k)};o.W=w(c,d){5(!c){4 e=9 y().s();c=8(e/7)}q 5(L(c)){c=c.J(/-/g,\'/\');4 e=9 y(c).s();c=8(e/7)}4 f=9 G();f.D=c;f.t=O(w(){4 a=9 y().s();H=8(a/7);4 l=H-c;f=o.F(f,l);5(d)4 b=d(f);5(b===E){Y(f.t)}},r)};o.F=w(a,l){4 b=Z;4 c=b*b;4 d=Q*c;a.p=z.u(l/d);a.15=z.u(a.p/N);a.A=z.u(a.p%N);a.v=z.u(l%d/c);a.B=z.u((l-(a.p*d+a.v*c))/b);a.C=z.u(l%(b));a.17=a.A<10?\'0\'+a.A:a.A;a.18=a.p<10?\'0\'+a.p:a.p;a.1a=a.v<10?\'0\'+a.v:a.v;a.1b=a.B<10?\'0\'+a.B:a.B;a.1c=a.C<10?\'0\'+a.C:a.C;1d a}', 62, 76, '||||var|if|msec|1000|parseInt|new|||||||||||||msecZero|decimal|xcsoft|days|else|100|getTime||floor|hour|function||Date|Math|day|minute|second|time|true|getTimeObject|Object|nowtime|startTime|replace|00|isNaN|finish|365|setInterval|typeof|24|false|split|stop|indexOf|clearInterval|countup|toString|clearTimeout|60||substring|endTime|object|countdown|year|undefined|dayZero|daysZero||hourZero|minuteZero|secondZero|return'.split('|'), 0, {}));

window.onload = function() {
    xcsoft.countdown('2020-12-28', function(time) {
        document.getElementById("y1").innerHTML = time.year
        document.getElementById("d1").innerHTML = time.day
        document.getElementById("h1").innerHTML = time.hourZero
        document.getElementById("i1").innerHTML = time.minuteZero
        document.getElementById("s1").innerHTML = time.secondZero
        document.getElementById("m1").innerHTML = time.msecZero
    }, function(time) {
    })
}

