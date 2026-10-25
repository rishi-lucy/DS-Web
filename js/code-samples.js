/* Multi-language code for every sub-experiment (Python · Java · C · C++).
   Python code comes from data.js (made self-contained below); Java/C/C++ are listed here.
   Edit freely: K[id] = [C body, C++ body, Java body]. */
(function(){
const r=String.raw;
/* Sub-experiment ids in data.js are zero-padded ("01A"); the K / PYO tables below
   are keyed without the pad ("1A"), so normalise before looking anything up. */
const nid = id => String(id).replace(/^0/, "");
const ind=(s,n)=>s.split("\n").map(l=>" ".repeat(n)+l).join("\n");
const WRAP={
c:b=>"#include <stdio.h>\n\n"+
 (/msqrt/.test(b)?"static double msqrt(double x){ double r=x>1?x:1; for(int i=0;i<40;i++) r=0.5*(r+x/r); return x<=0?0:r; }\n":"")+
 (/mexp/.test(b)?"static double mexp(double x){ double s=1,t=1; for(int i=1;i<60;i++){ t*=x/i; s+=t; } return s; }\n":"")+
 (/pa\(/.test(b)?String.raw`static void pa(const double*a,int n){ printf("["); for(int i=0;i<n;i++) printf(i?" %g":"%g",a[i]); printf("]\n"); }`+"\n":"")+
 "\nint main(void){\n"+ind(b,2)+"\n  return 0;\n}\n",
cpp:b=>r`#include <iostream>
#include <iomanip>
#include <vector>
#include <cmath>
#include <algorithm>
#include <numeric>
#include <map>
#include <string>
using namespace std;

void pa(const vector<double>&a){ cout<<"["; for(size_t i=0;i<a.size();i++) cout<<(i?" ":"")<<a[i]; cout<<"]\n"; }

int main(){
${ind(b,2)}
  return 0;
}
`,
java:b=>r`import java.util.*;

public class Main {
  static void pa(double[] a){ StringBuilder s=new StringBuilder("["); for(int i=0;i<a.length;i++) s.append(i>0?" ":"").append(a[i]); System.out.println(s+"]"); }

  public static void main(String[] args) {
${ind(b,4)}
  }
}
`};
const K={
/* ---------- 01 NumPy ---------- */
'1A':[r`int a[4]={1,2,3,4};
printf("[");
for(int i=0;i<4;i++) printf(i?" %d":"%d",a[i]);
printf("] shape=(4,)\n");`,
r`vector<int> a={1,2,3,4};
cout<<"[";
for(size_t i=0;i<a.size();i++) cout<<(i?" ":"")<<a[i];
cout<<"] shape=("<<a.size()<<",)\n";`,
r`int[] a={1,2,3,4};
System.out.println(Arrays.toString(a)+" shape=("+a.length+",)");`],
'1B':[r`int a[10];
for(int i=0;i<10;i++) a[i]=i;
printf("a[2:7] =");
for(int i=2;i<7;i++) printf(" %d",a[i]);
printf("\na[::-2] =");
for(int i=9;i>=0;i-=2) printf(" %d",a[i]);
printf("\n");`,
r`vector<int> a(10);
iota(a.begin(),a.end(),0);
cout<<"a[2:7] =";
for(int i=2;i<7;i++) cout<<" "<<a[i];
cout<<"\na[::-2] =";
for(int i=9;i>=0;i-=2) cout<<" "<<a[i];
cout<<"\n";`,
r`int[] a=new int[10];
for(int i=0;i<10;i++) a[i]=i;
StringBuilder s=new StringBuilder("a[2:7] =");
for(int i=2;i<7;i++) s.append(" ").append(a[i]);
s.append("\na[::-2] =");
for(int i=9;i>=0;i-=2) s.append(" ").append(a[i]);
System.out.println(s);`],
'1C':[r`int v[3]={1,2,3};
for(int i=0;i<3;i++){
  for(int j=0;j<3;j++) printf("%d ",1+v[j]);
  printf("\n");
}`,
r`int v[3]={1,2,3};
for(int i=0;i<3;i++){
  for(int j=0;j<3;j++) cout<<1+v[j]<<" ";
  cout<<"\n";
}`,
r`int[] v={1,2,3};
for(int i=0;i<3;i++){
  for(int j=0;j<3;j++) System.out.print((1+v[j])+" ");
  System.out.println();
}`],
'1D':[r`double s[5],q[5];
for(int i=0;i<5;i++){ double x=i/4.0; s[i]=msqrt(x); q[i]=x*x; }
pa(s,5);
pa(q,5);`,
r`vector<double> s,q;
for(int i=0;i<5;i++){ double x=i/4.0; s.push_back(sqrt(x)); q.push_back(x*x); }
pa(s);
pa(q);`,
r`double[] s=new double[5], q=new double[5];
for(int i=0;i<5;i++){ double x=i/4.0; s[i]=Math.sqrt(x); q[i]=x*x; }
pa(s);
pa(q);`],
'1E':[r`double d[8]={2,4,4,4,5,5,7,9},m=0,v=0;
for(int i=0;i<8;i++) m+=d[i];
m/=8;
for(int i=0;i<8;i++) v+=(d[i]-m)*(d[i]-m);
printf("mean=%g std=%g\n",m,msqrt(v/8));`,
r`vector<double> d={2,4,4,4,5,5,7,9};
double m=accumulate(d.begin(),d.end(),0.0)/d.size(),v=0;
for(double x:d) v+=(x-m)*(x-m);
cout<<"mean="<<m<<" std="<<sqrt(v/d.size())<<"\n";`,
r`double[] d={2,4,4,4,5,5,7,9};
double m=Arrays.stream(d).average().orElse(0), v=0;
for(double x:d) v+=(x-m)*(x-m);
System.out.println("mean="+m+" std="+Math.sqrt(v/d.length));`],
'1F':[r`int a[3][4];
for(int i=0;i<12;i++) a[i/4][i%4]=i;
for(int j=0;j<4;j++){
  for(int i=0;i<3;i++) printf("%d ",a[i][j]);
  printf("\n");
}`,
r`int a[3][4];
for(int i=0;i<12;i++) a[i/4][i%4]=i;
for(int j=0;j<4;j++){
  for(int i=0;i<3;i++) cout<<a[i][j]<<" ";
  cout<<"\n";
}`,
r`int[][] a=new int[3][4];
for(int i=0;i<12;i++) a[i/4][i%4]=i;
for(int j=0;j<4;j++){
  for(int i=0;i<3;i++) System.out.print(a[i][j]+" ");
  System.out.println();
}`],
'1G':[r`double a=2,b=1,c=1,d=3,det=a*d-b*c;
printf("[[%g %g]\n [%g %g]]\n",d/det,-b/det,-c/det,a/det);`,
r`double a=2,b=1,c=1,d=3,det=a*d-b*c;
cout<<"[["<<d/det<<" "<<-b/det<<"]\n ["<<-c/det<<" "<<a/det<<"]]\n";`,
r`double a=2,b=1,c=1,d=3,det=a*d-b*c;
System.out.printf("[[%.1f %.1f]%n [%.1f %.1f]]%n",d/det,-b/det,-c/det,a/det);`],
/* ---------- 02 Pandas ---------- */
'2A':[r`int a[3]={1,2,3},b[3]={4,5,6};
printf("   a  b\n");
for(int i=0;i<3;i++) printf("%d  %d  %d\n",i,a[i],b[i]);`,
r`int a[3]={1,2,3},b[3]={4,5,6};
cout<<"   a  b\n";
for(int i=0;i<3;i++) cout<<i<<"  "<<a[i]<<"  "<<b[i]<<"\n";`,
r`int[] a={1,2,3}, b={4,5,6};
System.out.println("   a  b");
for(int i=0;i<3;i++) System.out.println(i+"  "+a[i]+"  "+b[i]);`],
'2B':[r`int a[3]={1,2,3},b[3]={4,5,6};
printf("loc[0,'a'] = %d\n",a[0]);
printf("iloc[1]    = a:%d b:%d\n",a[1],b[1]);`,
r`int a[3]={1,2,3},b[3]={4,5,6};
cout<<"loc[0,'a'] = "<<a[0]<<"\n";
cout<<"iloc[1]    = a:"<<a[1]<<" b:"<<b[1]<<"\n";`,
r`int[] a={1,2,3}, b={4,5,6};
System.out.println("loc[0,'a'] = "+a[0]);
System.out.println("iloc[1]    = a:"+a[1]+" b:"+b[1]);`],
'2C':[r`int a[3]={1,2,3},b[3]={4,5,6};
printf("   a  b\n");
for(int i=0;i<3;i++) if(a[i]>1) printf("%d  %d  %d\n",i,a[i],b[i]);`,
r`int a[3]={1,2,3},b[3]={4,5,6};
cout<<"   a  b\n";
for(int i=0;i<3;i++) if(a[i]>1) cout<<i<<"  "<<a[i]<<"  "<<b[i]<<"\n";`,
r`int[] a={1,2,3}, b={4,5,6};
System.out.println("   a  b");
for(int i=0;i<3;i++) if(a[i]>1) System.out.println(i+"  "+a[i]+"  "+b[i]);`],
'2D':[r`int v[3]={10,20,30}; char k[3]={'x','y','x'};
int sx=0,sy=0;
for(int i=0;i<3;i++){ if(k[i]=='x') sx+=v[i]; else sy+=v[i]; }
printf("x %d\ny %d\n",sx,sy);`,
r`int v[3]={10,20,30}; string k="xyx";
map<char,int> g;
for(int i=0;i<3;i++) g[k[i]]+=v[i];
for(auto&p:g) cout<<p.first<<" "<<p.second<<"\n";`,
r`int[] v={10,20,30}; String k="xyx";
Map<Character,Integer> g=new TreeMap<>();
for(int i=0;i<3;i++) g.merge(k.charAt(i),v[i],Integer::sum);
g.forEach((c,s)->System.out.println(c+" "+s));`],
'2E':[r`int li[3]={1,2,3},ri[3]={1,2,4},sc[3]={90,80,70};
char nm[3]={'A','B','C'};
for(int i=0;i<3;i++)
  for(int j=0;j<3;j++)
    if(li[i]==ri[j]) printf("id=%d name=%c score=%d\n",li[i],nm[i],sc[j]);`,
r`int li[3]={1,2,3},ri[3]={1,2,4},sc[3]={90,80,70};
string nm="ABC";
for(int i=0;i<3;i++)
  for(int j=0;j<3;j++)
    if(li[i]==ri[j]) cout<<"id="<<li[i]<<" name="<<nm[i]<<" score="<<sc[j]<<"\n";`,
r`int[] li={1,2,3}, ri={1,2,4}, sc={90,80,70};
String nm="ABC";
for(int i=0;i<3;i++)
  for(int j=0;j<3;j++)
    if(li[i]==ri[j]) System.out.println("id="+li[i]+" name="+nm.charAt(i)+" score="+sc[j]);`],
'2F':[r`int v[3]={10,20,30}; char k[3]={'x','y','x'};
double s[2]={0,0}; int n[2]={0,0};
for(int i=0;i<3;i++){ int g=(k[i]=='y'); s[g]+=v[i]; n[g]++; }
printf("x %g\ny %g\n",s[0]/n[0],s[1]/n[1]);`,
r`int v[3]={10,20,30}; string k="xyx";
double s[2]={0,0}; int n[2]={0,0};
for(int i=0;i<3;i++){ int g=(k[i]=='y'); s[g]+=v[i]; n[g]++; }
cout<<"x "<<s[0]/n[0]<<"\ny "<<s[1]/n[1]<<"\n";`,
r`int[] v={10,20,30}; String k="xyx";
double[] s=new double[2]; int[] n=new int[2];
for(int i=0;i<3;i++){ int g=k.charAt(i)=='y'?1:0; s[g]+=v[i]; n[g]++; }
System.out.println("x "+s[0]/n[0]+"\ny "+s[1]/n[1]);`],
'2G':[r`int s[3]={0,1,2};
for(int i=0;i<3;i+=2){
  int t=s[i]+(i+1<3?s[i+1]:0);
  printf("window %d (2D) = %d\n",i/2+1,t);
}`,
r`int s[3]={0,1,2};
for(int i=0;i<3;i+=2){
  int t=s[i]+(i+1<3?s[i+1]:0);
  cout<<"window "<<i/2+1<<" (2D) = "<<t<<"\n";
}`,
r`int[] s={0,1,2};
for(int i=0;i<3;i+=2){
  int t=s[i]+(i+1<3?s[i+1]:0);
  System.out.println("window "+(i/2+1)+" (2D) = "+t);
}`],
/* ---------- 03 Data Cleaning ---------- */
'3A':[r`double x[3]={1,-999,3},s=0; int n=0;   /* -999 marks a missing value */
for(int i=0;i<3;i++) if(x[i]!=-999){ s+=x[i]; n++; }
for(int i=0;i<3;i++) printf("%g ",x[i]==-999?s/n:x[i]);
printf("\n");`,
r`vector<double> x={1,-999,3};   // -999 marks a missing value
double s=0; int n=0;
for(double v:x) if(v!=-999){ s+=v; n++; }
for(double v:x) cout<<(v==-999?s/n:v)<<" ";
cout<<"\n";`,
r`double[] x={1,-999,3};   // -999 marks a missing value
double s=0; int n=0;
for(double v:x) if(v!=-999){ s+=v; n++; }
for(double v:x) System.out.print((v==-999?s/n:v)+" ");
System.out.println();`],
'3B':[r`int a[6]={1,2,2,3,3,3};
for(int i=0;i<6;i++){
  int dup=0;
  for(int j=0;j<i;j++) if(a[j]==a[i]) dup=1;
  if(!dup) printf("%d ",a[i]);
}
printf("\n");`,
r`vector<int> a={1,2,2,3,3,3},u;
for(int v:a) if(find(u.begin(),u.end(),v)==u.end()) u.push_back(v);
for(int v:u) cout<<v<<" ";
cout<<"\n";`,
r`int[] a={1,2,2,3,3,3};
LinkedHashSet<Integer> u=new LinkedHashSet<>();
for(int v:a) u.add(v);
System.out.println(u);`],
'3C':[r`int x[3]={1,2,3};
for(int i=0;i<3;i++){ double d=(double)x[i]; printf("%d -> %.1f\n",x[i],d); }`,
r`int x[3]={1,2,3};
for(int i=0;i<3;i++){ double d=static_cast<double>(x[i]); cout<<x[i]<<" -> "<<fixed<<setprecision(1)<<d<<"\n"; }`,
r`int[] x={1,2,3};
for(int i=0;i<3;i++){ double d=(double)x[i]; System.out.println(x[i]+" -> "+d); }`],
'3D':[r`double d[5]={1,2,3,4,100};          /* sorted data */
double q1=d[1],q3=d[3],iqr=q3-q1;
for(int i=0;i<5;i++)
  if(d[i]<q1-1.5*iqr||d[i]>q3+1.5*iqr) printf("outlier: %g\n",d[i]);`,
r`vector<double> d={1,2,3,4,100};          // sorted data
double q1=d[1],q3=d[3],iqr=q3-q1;
for(double v:d)
  if(v<q1-1.5*iqr||v>q3+1.5*iqr) cout<<"outlier: "<<v<<"\n";`,
r`double[] d={1,2,3,4,100};          // sorted data
double q1=d[1], q3=d[3], iqr=q3-q1;
for(double v:d)
  if(v<q1-1.5*iqr||v>q3+1.5*iqr) System.out.println("outlier: "+v);`],
'3E':[r`char s[]="  Ab ";
int i=0,n=5;
while(s[i]==' ') i++;
while(n>i&&s[n-1]==' ') n--;
for(;i<n;i++) putchar(s[i]>='A'&&s[i]<='Z'?s[i]+32:s[i]);
printf("\n");`,
r`string s="  Ab ";
size_t a=s.find_first_not_of(' '),b=s.find_last_not_of(' ');
s=s.substr(a,b-a+1);
transform(s.begin(),s.end(),s.begin(),::tolower);
cout<<s<<"\n";`,
r`String s="  Ab ";
System.out.println(s.trim().toLowerCase());`],
'3F':[r`char v[2]={'a','b'};
printf("a b\n");
for(int i=0;i<2;i++) printf("%d %d\n",v[i]=='a',v[i]=='b');`,
r`string v="ab";
cout<<"a b\n";
for(char c:v) cout<<(c=='a')<<" "<<(c=='b')<<"\n";`,
r`String v="ab";
System.out.println("a b");
for(char c:v.toCharArray()) System.out.println((c=='a'?1:0)+" "+(c=='b'?1:0));`],
'3G':[r`double x[3]={10,20,40},lo=x[0],hi=x[0];
for(int i=1;i<3;i++){ if(x[i]<lo) lo=x[i]; if(x[i]>hi) hi=x[i]; }
for(int i=0;i<3;i++) printf("%.3f ",(x[i]-lo)/(hi-lo));
printf("\n");`,
r`vector<double> x={10,20,40};
double lo=*min_element(x.begin(),x.end()), hi=*max_element(x.begin(),x.end());
for(double v:x) cout<<fixed<<setprecision(3)<<(v-lo)/(hi-lo)<<" ";
cout<<"\n";`,
r`double[] x={10,20,40};
double lo=Arrays.stream(x).min().getAsDouble(), hi=Arrays.stream(x).max().getAsDouble();
for(double v:x) System.out.printf("%.3f ",(v-lo)/(hi-lo));
System.out.println();`],
/* ---------- 04 EDA ---------- */
'4A':[r`double d[8]={2,4,4,4,5,5,7,9},m=0,v=0,lo=d[0],hi=d[0];
for(int i=0;i<8;i++){ m+=d[i]; if(d[i]<lo) lo=d[i]; if(d[i]>hi) hi=d[i]; }
m/=8;
for(int i=0;i<8;i++) v+=(d[i]-m)*(d[i]-m);
printf("count=8 mean=%g std=%.3f min=%g max=%g\n",m,msqrt(v/7),lo,hi);`,
r`vector<double> d={2,4,4,4,5,5,7,9};
double m=accumulate(d.begin(),d.end(),0.0)/d.size(),v=0;
for(double x:d) v+=(x-m)*(x-m);
cout<<"count="<<d.size()<<" mean="<<m<<" std="<<fixed<<setprecision(3)<<sqrt(v/(d.size()-1))<<defaultfloat
    <<" min="<<*min_element(d.begin(),d.end())<<" max="<<*max_element(d.begin(),d.end())<<"\n";`,
r`double[] d={2,4,4,4,5,5,7,9};
DoubleSummaryStatistics st=Arrays.stream(d).summaryStatistics();
double m=st.getAverage(), v=0;
for(double x:d) v+=(x-m)*(x-m);
System.out.printf("count=%d mean=%.1f std=%.3f min=%.0f max=%.0f%n",st.getCount(),m,Math.sqrt(v/(d.length-1)),st.getMin(),st.getMax());`],
'4B':[r`double d[8]={2,4,4,4,5,5,7,9},m=0,m2=0,m3=0;
for(int i=0;i<8;i++) m+=d[i];
m/=8;
for(int i=0;i<8;i++){ double t=d[i]-m; m2+=t*t; m3+=t*t*t; }
m2/=8; m3/=8;
printf("skew=%.3f\n",m3/(m2*msqrt(m2)));`,
r`vector<double> d={2,4,4,4,5,5,7,9};
double m=accumulate(d.begin(),d.end(),0.0)/d.size(),m2=0,m3=0;
for(double x:d){ double t=x-m; m2+=t*t; m3+=t*t*t; }
m2/=d.size(); m3/=d.size();
cout<<"skew="<<fixed<<setprecision(3)<<m3/(m2*sqrt(m2))<<"\n";`,
r`double[] d={2,4,4,4,5,5,7,9};
double m=Arrays.stream(d).average().orElse(0), m2=0, m3=0;
for(double x:d){ double t=x-m; m2+=t*t; m3+=t*t*t; }
m2/=d.length; m3/=d.length;
System.out.printf("skew=%.3f%n",m3/(m2*Math.sqrt(m2)));`],
'4C':[r`double a[5]={1,2,3,4,5},b[5]={2,4,5,4,5},ma=0,mb=0,sab=0,saa=0,sbb=0;
for(int i=0;i<5;i++){ ma+=a[i]; mb+=b[i]; }
ma/=5; mb/=5;
for(int i=0;i<5;i++){ sab+=(a[i]-ma)*(b[i]-mb); saa+=(a[i]-ma)*(a[i]-ma); sbb+=(b[i]-mb)*(b[i]-mb); }
printf("corr(a,b)=%.4f\n",sab/msqrt(saa*sbb));`,
r`double a[5]={1,2,3,4,5},b[5]={2,4,5,4,5},ma=0,mb=0,sab=0,saa=0,sbb=0;
for(int i=0;i<5;i++){ ma+=a[i]; mb+=b[i]; }
ma/=5; mb/=5;
for(int i=0;i<5;i++){ sab+=(a[i]-ma)*(b[i]-mb); saa+=(a[i]-ma)*(a[i]-ma); sbb+=(b[i]-mb)*(b[i]-mb); }
cout<<"corr(a,b)="<<fixed<<setprecision(4)<<sab/sqrt(saa*sbb)<<"\n";`,
r`double[] a={1,2,3,4,5}, b={2,4,5,4,5};
double ma=Arrays.stream(a).average().orElse(0), mb=Arrays.stream(b).average().orElse(0), sab=0, saa=0, sbb=0;
for(int i=0;i<5;i++){ sab+=(a[i]-ma)*(b[i]-mb); saa+=(a[i]-ma)*(a[i]-ma); sbb+=(b[i]-mb)*(b[i]-mb); }
System.out.printf("corr(a,b)=%.4f%n",sab/Math.sqrt(saa*sbb));`],
'4D':[r`char c[4]={'x','y','x','x'}; int x=0,y=0;
for(int i=0;i<4;i++){ if(c[i]=='x') x++; else y++; }
printf("x %d\ny %d\n",x,y);`,
r`map<char,int> m;
for(char c:string("xyxx")) m[c]++;
for(auto&p:m) cout<<p.first<<" "<<p.second<<"\n";`,
r`Map<Character,Integer> m=new TreeMap<>();
for(char c:"xyxx".toCharArray()) m.merge(c,1,Integer::sum);
m.forEach((k,v)->System.out.println(k+" "+v));`],
'4E':[r`int v[4]={10,20,30,40}; char k[4]={'x','y','x','y'};
double s[2]={0,0}; int n[2]={0,0};
for(int i=0;i<4;i++){ int g=(k[i]=='y'); s[g]+=v[i]; n[g]++; }
printf("x %g\ny %g\n",s[0]/n[0],s[1]/n[1]);`,
r`int v[4]={10,20,30,40}; string k="xyxy";
double s[2]={0,0}; int n[2]={0,0};
for(int i=0;i<4;i++){ int g=(k[i]=='y'); s[g]+=v[i]; n[g]++; }
cout<<"x "<<s[0]/n[0]<<"\ny "<<s[1]/n[1]<<"\n";`,
r`int[] v={10,20,30,40}; String k="xyxy";
double[] s=new double[2]; int[] n=new int[2];
for(int i=0;i<4;i++){ int g=k.charAt(i)=='y'?1:0; s[g]+=v[i]; n[g]++; }
System.out.println("x "+s[0]/n[0]+"\ny "+s[1]/n[1]);`],
'4F':[r`double d[5]={1,2,3,4,100};   /* sorted */
printf("min=%g q1=%g median=%g q3=%g max=%g\n",d[0],d[1],d[2],d[3],d[4]);`,
r`vector<double> d={1,2,3,4,100};   // sorted
cout<<"min="<<d[0]<<" q1="<<d[1]<<" median="<<d[2]<<" q3="<<d[3]<<" max="<<d[4]<<"\n";`,
r`double[] d={1,2,3,4,100};   // sorted
System.out.println("min="+d[0]+" q1="+d[1]+" median="+d[2]+" q3="+d[3]+" max="+d[4]);`],
'4G':[r`double x[5]={1,-999,3,4,-999}; int miss=0;   /* -999 = missing */
for(int i=0;i<5;i++) if(x[i]==-999) miss++;
printf("rows=5 missing=%d (%.0f%%)\n",miss,miss*100.0/5);`,
r`vector<double> x={1,-999,3,4,-999};   // -999 = missing
int miss=count(x.begin(),x.end(),-999.0);
cout<<"rows="<<x.size()<<" missing="<<miss<<" ("<<miss*100.0/x.size()<<"%)\n";`,
r`double[] x={1,-999,3,4,-999};   // -999 = missing
long miss=Arrays.stream(x).filter(v->v==-999).count();
System.out.println("rows="+x.length+" missing="+miss+" ("+(miss*100.0/x.length)+"%)");`],
/* ---------- 05 Visualization (ASCII charts) ---------- */
'5A':[r`int y[3]={2,4,3};
for(int i=0;i<3;i++){
  printf("x=%d y=%d |",i+1,y[i]);
  for(int k=0;k<y[i];k++) printf("*");
  printf("\n");
}`,
r`int y[3]={2,4,3};
for(int i=0;i<3;i++) cout<<"x="<<i+1<<" y="<<y[i]<<" |"<<string(y[i],'*')<<"\n";`,
r`int[] y={2,4,3};
for(int i=0;i<3;i++) System.out.println("x="+(i+1)+" y="+y[i]+" |"+"*".repeat(y[i]));`],
'5B':[r`char l[2]={'a','b'}; int v[2]={3,5};
for(int i=0;i<2;i++){
  printf("%c ",l[i]);
  for(int k=0;k<v[i];k++) printf("#");
  printf(" %d\n",v[i]);
}`,
r`string l="ab"; int v[2]={3,5};
for(int i=0;i<2;i++) cout<<l[i]<<" "<<string(v[i],'#')<<" "<<v[i]<<"\n";`,
r`String l="ab"; int[] v={3,5};
for(int i=0;i<2;i++) System.out.println(l.charAt(i)+" "+"#".repeat(v[i])+" "+v[i]);`],
'5C':[r`int d[6]={1,2,2,3,3,3};
for(int b=1;b<=3;b++){
  int c=0;
  for(int i=0;i<6;i++) if(d[i]==b) c++;
  printf("%d ",b);
  for(int k=0;k<c;k++) printf("#");
  printf("\n");
}`,
r`vector<int> d={1,2,2,3,3,3};
for(int b=1;b<=3;b++) cout<<b<<" "<<string(count(d.begin(),d.end(),b),'#')<<"\n";`,
r`int[] d={1,2,2,3,3,3};
for(int b=1;b<=3;b++){
  int c=0;
  for(int v:d) if(v==b) c++;
  System.out.println(b+" "+"#".repeat(c));
}`],
'5D':[r`int px[3]={1,2,3},py[3]={3,1,2};
for(int y=3;y>=1;y--){
  for(int x=1;x<=3;x++){
    int hit=0;
    for(int i=0;i<3;i++) if(px[i]==x&&py[i]==y) hit=1;
    printf(hit?"* ":". ");
  }
  printf("\n");
}`,
r`int px[3]={1,2,3},py[3]={3,1,2};
for(int y=3;y>=1;y--){
  for(int x=1;x<=3;x++){
    bool hit=false;
    for(int i=0;i<3;i++) if(px[i]==x&&py[i]==y) hit=true;
    cout<<(hit?"* ":". ");
  }
  cout<<"\n";
}`,
r`int[] px={1,2,3}, py={3,1,2};
for(int y=3;y>=1;y--){
  StringBuilder row=new StringBuilder();
  for(int x=1;x<=3;x++){
    boolean hit=false;
    for(int i=0;i<3;i++) if(px[i]==x&&py[i]==y) hit=true;
    row.append(hit?"* ":". ");
  }
  System.out.println(row);
}`],
'5E':[r`double d[5]={1,2,3,4,10};
printf("min=%g q1=%g median=%g q3=%g max=%g\n",d[0],d[1],d[2],d[3],d[4]);
printf("|----[ %g | %g | %g ]----|\n",d[1],d[2],d[3]);`,
r`vector<double> d={1,2,3,4,10};
cout<<"min="<<d[0]<<" q1="<<d[1]<<" median="<<d[2]<<" q3="<<d[3]<<" max="<<d[4]<<"\n";
cout<<"|----[ "<<d[1]<<" | "<<d[2]<<" | "<<d[3]<<" ]----|\n";`,
r`double[] d={1,2,3,4,10};
System.out.println("min="+d[0]+" q1="+d[1]+" median="+d[2]+" q3="+d[3]+" max="+d[4]);
System.out.println("|----[ "+d[1]+" | "+d[2]+" | "+d[3]+" ]----|");`],
'5F':[r`double m[3][3]={{1,.8,.1},{.8,1,.4},{.1,.4,1}};
const char*sh=" .:#";
for(int i=0;i<3;i++){
  for(int j=0;j<3;j++){ char c=sh[(int)(m[i][j]*3.99)]; printf("%c%c",c,c); }
  printf("\n");
}`,
r`double m[3][3]={{1,.8,.1},{.8,1,.4},{.1,.4,1}};
string sh=" .:#";
for(int i=0;i<3;i++){
  for(int j=0;j<3;j++){ char c=sh[(int)(m[i][j]*3.99)]; cout<<c<<c; }
  cout<<"\n";
}`,
r`double[][] m={{1,.8,.1},{.8,1,.4},{.1,.4,1}};
String sh=" .:#";
for(int i=0;i<3;i++){
  StringBuilder row=new StringBuilder();
  for(int j=0;j<3;j++){ char c=sh.charAt((int)(m[i][j]*3.99)); row.append(c).append(c); }
  System.out.println(row);
}`],
'5G':[r`int l[2]={1,2},b[2]={2,1};
printf("[Line] y = %d, %d\n",l[0],l[1]);
printf("[Bar ] ");
for(int i=0;i<2;i++){
  for(int k=0;k<b[i];k++) printf("#");
  printf(" ");
}
printf("\n");`,
r`int l[2]={1,2},b[2]={2,1};
cout<<"[Line] y = "<<l[0]<<", "<<l[1]<<"\n[Bar ] ";
for(int i=0;i<2;i++) cout<<string(b[i],'#')<<" ";
cout<<"\n";`,
r`int[] l={1,2}, b={2,1};
System.out.println("[Line] y = "+l[0]+", "+l[1]);
StringBuilder s=new StringBuilder("[Bar ] ");
for(int i=0;i<2;i++) s.append("#".repeat(b[i])).append(" ");
System.out.println(s);`],
/* ---------- 06 Machine Learning ---------- */
'6A':[r`int n=10, tr=n*8/10;
printf("train=%d test=%d\n",tr,n-tr);
printf("test indices:");
for(int i=tr;i<n;i++) printf(" %d",i);
printf("\n");`,
r`int n=10, tr=n*8/10;
cout<<"train="<<tr<<" test="<<n-tr<<"\ntest indices:";
for(int i=tr;i<n;i++) cout<<" "<<i;
cout<<"\n";`,
r`int n=10, tr=n*8/10;
System.out.println("train="+tr+" test="+(n-tr));
StringBuilder s=new StringBuilder("test indices:");
for(int i=tr;i<n;i++) s.append(" ").append(i);
System.out.println(s);`],
'6B':[r`double x[5]={1,2,3,4,5},y[5]={3,5,7,9,11},mx=0,my=0,sxy=0,sxx=0;
for(int i=0;i<5;i++){ mx+=x[i]; my+=y[i]; }
mx/=5; my/=5;
for(int i=0;i<5;i++){ sxy+=(x[i]-mx)*(y[i]-my); sxx+=(x[i]-mx)*(x[i]-mx); }
double w=sxy/sxx;
printf("slope=%g intercept=%g\n",w,my-w*mx);`,
r`vector<double> x={1,2,3,4,5},y={3,5,7,9,11};
double mx=accumulate(x.begin(),x.end(),0.0)/5,my=accumulate(y.begin(),y.end(),0.0)/5,sxy=0,sxx=0;
for(int i=0;i<5;i++){ sxy+=(x[i]-mx)*(y[i]-my); sxx+=(x[i]-mx)*(x[i]-mx); }
double w=sxy/sxx;
cout<<"slope="<<w<<" intercept="<<my-w*mx<<"\n";`,
r`double[] x={1,2,3,4,5}, y={3,5,7,9,11};
double mx=Arrays.stream(x).average().orElse(0), my=Arrays.stream(y).average().orElse(0), sxy=0, sxx=0;
for(int i=0;i<5;i++){ sxy+=(x[i]-mx)*(y[i]-my); sxx+=(x[i]-mx)*(x[i]-mx); }
double w=sxy/sxx;
System.out.println("slope="+w+" intercept="+(my-w*mx));`],
'6C':[r`double w=1.5,b=-4;   /* pretend these weights were learned */
for(int x=1;x<=4;x++){
  double p=1/(1+mexp(-(w*x+b)));
  printf("x=%d p=%.3f class=%d\n",x,p,p>=0.5);
}`,
r`double w=1.5,b=-4;   // pretend these weights were learned
for(int x=1;x<=4;x++){
  double p=1/(1+exp(-(w*x+b)));
  cout<<"x="<<x<<" p="<<fixed<<setprecision(3)<<p<<" class="<<(p>=0.5)<<"\n";
}`,
r`double w=1.5, b=-4;   // pretend these weights were learned
for(int x=1;x<=4;x++){
  double p=1/(1+Math.exp(-(w*x+b)));
  System.out.printf("x=%d p=%.3f class=%d%n",x,p,p>=0.5?1:0);
}`],
'6D':[r`double x[6]={1,2,3,10,11,12},q=5;
int lab[6]={0,0,0,1,1,1},used[6]={0},votes=0;
for(int k=0;k<3;k++){
  int best=-1;
  for(int i=0;i<6;i++){
    double di=x[i]>q?x[i]-q:q-x[i];
    if(!used[i]&&(best<0||di<(x[best]>q?x[best]-q:q-x[best]))) best=i;
  }
  used[best]=1; votes+=lab[best];
}
printf("query=%g -> class %d\n",q,votes>=2);`,
r`double x[6]={1,2,3,10,11,12},q=5;
int lab[6]={0,0,0,1,1,1},votes=0;
vector<int> idx={0,1,2,3,4,5};
sort(idx.begin(),idx.end(),[&](int a,int b){ return fabs(x[a]-q)<fabs(x[b]-q); });
for(int k=0;k<3;k++) votes+=lab[idx[k]];
cout<<"query="<<q<<" -> class "<<(votes>=2)<<"\n";`,
r`double[] x={1,2,3,10,11,12}; double q=5;
int[] lab={0,0,0,1,1,1}; int votes=0;
Integer[] idx={0,1,2,3,4,5};
Arrays.sort(idx,(a,b)->Double.compare(Math.abs(x[a]-q),Math.abs(x[b]-q)));
for(int k=0;k<3;k++) votes+=lab[idx[k]];
System.out.println("query="+q+" -> class "+(votes>=2?1:0));`],
'6E':[r`double x[6]={1,2,3,10,11,12}; int y[6]={0,0,0,1,1,1};
double bestT=0; int bestErr=99;
for(int i=0;i<5;i++){
  double t=(x[i]+x[i+1])/2; int err=0;
  for(int j=0;j<6;j++) err+=((x[j]>t)!=y[j]);
  if(err<bestErr){ bestErr=err; bestT=t; }
}
printf("split at x>%g, errors=%d\n",bestT,bestErr);`,
r`double x[6]={1,2,3,10,11,12}; int y[6]={0,0,0,1,1,1};
double bestT=0; int bestErr=99;
for(int i=0;i<5;i++){
  double t=(x[i]+x[i+1])/2; int err=0;
  for(int j=0;j<6;j++) err+=((x[j]>t)!=y[j]);
  if(err<bestErr){ bestErr=err; bestT=t; }
}
cout<<"split at x>"<<bestT<<", errors="<<bestErr<<"\n";`,
r`double[] x={1,2,3,10,11,12}; int[] y={0,0,0,1,1,1};
double bestT=0; int bestErr=99;
for(int i=0;i<5;i++){
  double t=(x[i]+x[i+1])/2; int err=0;
  for(int j=0;j<6;j++) err+=((x[j]>t?1:0)!=y[j])?1:0;
  if(err<bestErr){ bestErr=err; bestT=t; }
}
System.out.println("split at x>"+bestT+", errors="+bestErr);`],
'6F':[r`int n=10,k=5,sz=n/k; double sc[5]={0.9,0.8,1.0,0.9,0.95},s=0;
for(int f=0;f<k;f++){
  printf("fold %d: test=[%d,%d) train=%d samples\n",f+1,f*sz,(f+1)*sz,n-sz);
  s+=sc[f];
}
printf("mean accuracy=%.3f\n",s/k);`,
r`int n=10,k=5,sz=n/k; double sc[5]={0.9,0.8,1.0,0.9,0.95},s=0;
for(int f=0;f<k;f++){
  cout<<"fold "<<f+1<<": test=["<<f*sz<<","<<(f+1)*sz<<") train="<<n-sz<<" samples\n";
  s+=sc[f];
}
cout<<"mean accuracy="<<fixed<<setprecision(3)<<s/k<<"\n";`,
r`int n=10,k=5,sz=n/k; double[] sc={0.9,0.8,1.0,0.9,0.95}; double s=0;
for(int f=0;f<k;f++){
  System.out.println("fold "+(f+1)+": test=["+f*sz+","+(f+1)*sz+") train="+(n-sz)+" samples");
  s+=sc[f];
}
System.out.printf("mean accuracy=%.3f%n",s/k);`],
'6G':[r`int t[6]={1,0,1,1,0,1},p[6]={1,0,0,1,1,1},tp=0,fp=0,fn=0,ok=0;
for(int i=0;i<6;i++){
  ok+=(t[i]==p[i]);
  tp+=(t[i]&&p[i]); fp+=(!t[i]&&p[i]); fn+=(t[i]&&!p[i]);
}
printf("accuracy=%.3f precision=%.3f recall=%.3f\n",ok/6.0,tp/(double)(tp+fp),tp/(double)(tp+fn));`,
r`int t[6]={1,0,1,1,0,1},p[6]={1,0,0,1,1,1},tp=0,fp=0,fn=0,ok=0;
for(int i=0;i<6;i++){
  ok+=(t[i]==p[i]);
  tp+=(t[i]&&p[i]); fp+=(!t[i]&&p[i]); fn+=(t[i]&&!p[i]);
}
cout<<fixed<<setprecision(3)<<"accuracy="<<ok/6.0<<" precision="<<tp/(double)(tp+fp)<<" recall="<<tp/(double)(tp+fn)<<"\n";`,
r`int[] t={1,0,1,1,0,1}, p={1,0,0,1,1,1}; int tp=0,fp=0,fn=0,ok=0;
for(int i=0;i<6;i++){
  if(t[i]==p[i]) ok++;
  if(t[i]==1&&p[i]==1) tp++;
  if(t[i]==0&&p[i]==1) fp++;
  if(t[i]==1&&p[i]==0) fn++;
}
System.out.printf("accuracy=%.3f precision=%.3f recall=%.3f%n",ok/6.0,tp/(double)(tp+fp),tp/(double)(tp+fn));`]
};

/* ---------- Python: setup + fixes so every snippet runs standalone in the browser (Pyodide) ---------- */
const PRE={
'01':"import numpy as np",
'02':"import pandas as pd\ndf=pd.DataFrame({'a':[1,2,3],'b':[4,5,6]})",
'03':"import pandas as pd\ndf=pd.DataFrame({'x':[1,None,3,3]})",
'04':"import pandas as pd\ndf=pd.DataFrame({'a':[2,4,4,4,5,5,7,9],'b':[1,3,2,5,4,6,8,7],'c':list('xyxyxyxy')})",
'05':"import matplotlib\nmatplotlib.use('AGG')\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport pandas as pd\ndf=pd.DataFrame({'a':[1,2,3,4,5],'b':[2,4,5,4,7],'c':[9,7,6,3,1]})",
'06':"import numpy as np\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nX,y=load_iris(return_X_y=True)\nXtr,Xte,ytr,yte=train_test_split(X,y,test_size=.2,random_state=0)\nm=LogisticRegression(max_iter=500).fit(Xtr,ytr)"
};
const PYO={
'1E':"a=np.array([2,4,4,4,5,5,7,9])\nprint('mean =',a.mean(),' std =',a.std())",
'2A':"print(df)",
'2D':"df=pd.DataFrame({'k':['x','y','x'],'v':[10,20,30]})\nprint(df.groupby('k')['v'].sum())",
'2E':"l=pd.DataFrame({'id':[1,2,3],'name':['A','B','C']})\nr=pd.DataFrame({'id':[1,2,4],'score':[90,80,70]})\nprint(l.merge(r,on='id'))",
'2F':"df=pd.DataFrame({'k':['x','y','x'],'v':[10,20,30]})\nprint(df.pivot_table(index='k',values='v',aggfunc='mean'))",
'3B':"df=pd.DataFrame({'x':[1,2,2,3,3,3]})\nprint(df.drop_duplicates())",
'3C':"df=pd.DataFrame({'x':[1,2,3]})\ndf['x']=df['x'].astype('float')\nprint(df.dtypes)",
'3D':"s=pd.Series([1,2,3,4,100])\nq1,q3=s.quantile([.25,.75])\niqr=q3-q1\nprint('outliers:',s[(s<q1-1.5*iqr)|(s>q3+1.5*iqr)].tolist())",
'3G':"df=pd.DataFrame({'x':[10,20,40]})\nprint((df.x-df.x.min())/(df.x.max()-df.x.min()))",
'4B':"print(df[['a','b']].skew())",
'4C':"df=pd.DataFrame({'a':[1,2,3,4,5],'b':[2,4,5,4,5]})\nprint(df.corr())",
'4D':"df=pd.DataFrame({'c':list('xyxx')})\nprint(df['c'].value_counts())",
'4E':"df=pd.DataFrame({'c':['x','y','x','y'],'v':[10,20,30,40]})\nprint(df.groupby('c').mean())",
'4F':"s=pd.Series([1,2,3,4,100])\nprint(s.describe())\ns.plot.box()",
'4G':"df=pd.DataFrame({'x':[1,None,3,4,None]})\ndf.info()\nprint(df.isna().sum())",
'6A':"Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.2,random_state=0)\nprint('train',Xtr.shape,'test',Xte.shape)",
'6B':"from sklearn.linear_model import LinearRegression\nX1=np.array([[1],[2],[3],[4],[5]]);y1=np.array([3,5,7,9,11])\nm=LinearRegression().fit(X1,y1)\nprint('slope',round(m.coef_[0],3),'intercept',round(m.intercept_,3))",
'6C':"X1=[[1],[2],[3],[4]];y1=[0,0,1,1]\nm=LogisticRegression().fit(X1,y1)\nprint('classes',m.predict(X1),'p(1)',m.predict_proba(X1)[:,1].round(3))",
'6D':"from sklearn.neighbors import KNeighborsClassifier\nX1=[[1],[2],[3],[10],[11],[12]];y1=[0,0,0,1,1,1]\nm=KNeighborsClassifier(3).fit(X1,y1)\nprint('query=5 -> class',m.predict([[5]])[0])",
'6E':"from sklearn.tree import DecisionTreeClassifier,export_text\nX1=[[1],[2],[3],[10],[11],[12]];y1=[0,0,0,1,1,1]\nm=DecisionTreeClassifier(max_depth=1).fit(X1,y1)\nprint(export_text(m,feature_names=['x']))",
'6F':"from sklearn.model_selection import cross_val_score\nprint(cross_val_score(LogisticRegression(max_iter=500),X,y,cv=5).round(3))",
'6G':"from sklearn.metrics import accuracy_score,precision_score,recall_score\nt=[1,0,1,1,0,1];p=[1,0,0,1,1,1]\nprint('accuracy',round(accuracy_score(t,p),3),'precision',precision_score(t,p),'recall',recall_score(t,p))"
};
function pythonFor(sub,eid){
  const pre=PRE[eid]||"";
  /* PYO[] holds legacy one-off Python overrides from the reference site; data.js now
     carries the real, verified script for every sub-experiment, so sub.code wins.
     Figures are kept open (no plt.show / plt.close in the browser) so the panel can
     render every chart inline instead of only writing it to a file. */
  let body=String(sub.code||"")
    .replace(/plt\.show\(\);?/g,"")
    .replace(/^[ \t]*plt\.close\([^)]*\)[ \t]*$/gm,"")
    .replace(/;\s*$/gm,"");
  const have=new Set(pre.split("\n"));
  body=body.split("\n").filter(l=>!have.has(l.trim())||/^\s/.test(l)).join("\n");
  return (pre?pre+"\n\n":"")+body.trim()+"\n";
}
const HELLO={
Python:"print('Hello, Data Science!')\nfor i in range(1, 6):\n    print(i, i * i)\n",
Java:WRAP.java("System.out.println(\"Hello, Data Science!\");\nfor(int i=1;i<=5;i++) System.out.println(i+\" \"+i*i);"),
C:WRAP.c(r`printf("Hello, Data Science!\n");
for(int i=1;i<=5;i++) printf("%d %d\n",i,i*i);`),
"C++":WRAP.cpp(r`cout<<"Hello, Data Science!\n";
for(int i=1;i<=5;i++) cout<<i<<" "<<i*i<<"\n";`)
};
function codesFor(sub,eid){
  const k=K[nid(sub.id)];
  const c={Python:pythonFor(sub,eid)};
  if(k){c.C=WRAP.c(k[0]);c["C++"]=WRAP.cpp(k[1]);c.Java=WRAP.java(k[2]);}
  else{c.C=HELLO.C;c["C++"]=HELLO["C++"];c.Java=HELLO.Java}
  return c;
}
window.LAB={K,WRAP,PRE,PYO,HELLO,codesFor};
})();
